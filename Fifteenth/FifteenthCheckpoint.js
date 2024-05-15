/* En este desafío deberás crear un sistema de administración para un hotel.

El objetivo de este ejercicio es utilizar closures para implementar la lógica de una función (hotelSystem) que administre un hotel.
La función recibirá un parámetro rooms, definirá el número total de habitaciones.

El closure debe retornar las siguientes funciones:

searchReservation(id): esta función permitirá buscar una reservación por su ID.
En caso de no encontrarla, se retornará un error con el mensaje "La reservación no fue encontrada".

getSortReservations(): esta función nos devolverá una copia de las reservaciones sin modificar el array original
ordenando las reservaciones por fecha de check-in de manera ascendente.

addReservation(reservation): esta función se usará para agregar una nueva reservación.
Debe asegurarse de que la habitación solicitada esté disponible para las fechas de check-in y check-out.
En caso de que esté reservada, se retornará un error con el mensaje "La habitación no está disponible".

removeReservation(id): esta función eliminará la reservación correspondiente al ID recibido y la retornará.
En caso de que la reservación no exista, se retornará un error con el mensaje "La reservación que se busca remover no existe".

getReservations(): esta función nos devolverá todas las reservaciones.

getAvailableRooms(checkIn, checkOut): esta función recibirá dos parámetros, checkIn y checkOut con formato "dd/mm".
La función debe devolver las habitaciones disponibles para las fechas dadas.

El formato que recibirás para las reservaciones será el siguiente:

id: un identificador único
name: El nombre de quien agenda
checkIn: Fecha de llegada
checkOut: Fecha de salida
roomNumber: La habitación solicitada
Ejemplo 1:

Input:

const hotel = hotelSystem(10);

// Agregar una nueva reservación
hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.getReservations();

Output:
[
  {
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
  }
]

Ejemplo 2:

Input:

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
});

// Buscar una resevación hecha
hotel.searchReservation(2);

Output:
{
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 7,
}

Ejemplo 3:

Input:

const hotel = hotelSystem(10);

hotel.addReservation({
  id: 1,
  name: "John Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});

hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "10/01",
  roomNumber: 9,
});

// Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
hotel.getAvailableRooms("01/01", "05/01")

Output:

[2, 3, 4, 5, 6, 7, 8, 10] */

function hotelSystem (rooms) {
  const RESERVATIONS = []

  function searchReservation (id) {
    const INDEX = RESERVATIONS.findIndex((room) => room.id === id)

    if (INDEX > -1) {
      return RESERVATIONS[INDEX]
    }
    throw new Error('La reservación no fue encontrada')
  }

  function getSortReservations () {
    const RESERVATIONS_COPY = [...RESERVATIONS]

    RESERVATIONS_COPY.sort((a, b) => {
      const DATE_A = new Date(`${a.checkIn} ${new Date().getFullYear()}`)
      const DATE_B = new Date(`${b.checkIn} ${new Date().getFullYear()}`)
      return DATE_A - DATE_B
    })
    return RESERVATIONS_COPY
  }

  function addReservation (reservation) {
    if (!isRoomAvailable(reservation)) {
      throw new Error('La habitación no está disponible')
    }

    RESERVATIONS.push(reservation)
    return `Nueva reservación ${reservation.name}`
  }

  function removeReservation (id) {
    const INDEX = RESERVATIONS.findIndex((room) => room.id === id)

    if (INDEX > -1) {
      const REMOVED_RESERVATION = RESERVATIONS[INDEX]
      RESERVATIONS.splice(INDEX, 1)
      return REMOVED_RESERVATION
    }
    throw new Error('La reservación que se busca remover no existe')
  }

  function getReservations () {
    return RESERVATIONS
  }

  function isRoomAvailable (reservation) {
    const checkIn = reservation.checkIn
    const checkOut = reservation.checkOut

    for (const CURRENT_RESERVATION of RESERVATIONS) {
      const CURRENT_CHECK_IN = CURRENT_RESERVATION.checkIn
      const CURRENT_CHECK_OUT = CURRENT_RESERVATION.checkOut

      if (
        (checkIn >= CURRENT_CHECK_IN && checkIn < CURRENT_CHECK_OUT) ||
        (checkOut > CURRENT_CHECK_IN && checkOut <= CURRENT_CHECK_OUT) ||
        (checkIn <= CURRENT_CHECK_IN && checkOut >= CURRENT_CHECK_OUT)
      ) {
        if (CURRENT_RESERVATION.roomNumber === reservation.roomNumber) {
          return false
        }
      }
    }
    return true
  }

  function getAvailableRooms (checkIn, checkOut) {
    const AVAILABLE_ROOMS = []

    for (let i = 1; i <= rooms; i++) {
      const RESERVATION = { checkIn, checkOut, roomNumber: i }

      if (isRoomAvailable(RESERVATION)) {
        AVAILABLE_ROOMS.push(i)
      }
    }
    return AVAILABLE_ROOMS
  }

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms
  }
}

const LUXURY_HOTEL = hotelSystem(10)

LUXURY_HOTEL.addReservation({
  id: 1,
  name: 'Alexander',
  checkIn: '24/01',
  checkOut: '28/01',
  roomNumber: 1
})

console.log(LUXURY_HOTEL.getReservations())
