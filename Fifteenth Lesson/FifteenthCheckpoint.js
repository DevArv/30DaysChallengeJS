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

// The hotelSystem function is a hotel reservation system generator that manages reservations for a given number of rooms.

function hotelSystem(rooms) {
  // The reservations variable stores the reservations made.
  const reservations = [];

  // The searchReservation function searches for a reservation by its ID and returns it if it exists.
  function searchReservation(id) {
    const index = reservations.findIndex((room) => room.id === id);

    if (index > -1) {
      return reservations[index];
    }

    throw new Error("Reservation does not exist");
  }

  // The getSortReservations function returns a copy of reservations sorted by check-in date.
  function getSortReservations() {
    const copy = [...reservations];

    copy.sort((a, b) => {
      const aDate = new Date(`${a.checkIn} ${new Date().getFullYear()}`);
      const bDate = new Date(`${b.checkIn} ${new Date().getFullYear()}`);
      return aDate - bDate;
    });

    return copy;
  }

  // The addReservation function adds a new reservation if the room is available.
  function addReservation(reservation) {
    if (!isAvailable(reservation)) {
      throw new Error("The room is occupied");
    }

    reservations.push(reservation);
    return `Reservation for ${reservation.name} was successfully scheduled`;
  }

  // The removeReservation function removes a reservation by its ID and returns it if it exists.
  function removeReservation(id) {
    const index = reservations.findIndex((room) => room.id === id);

    if (index > -1) {
      const removedReservation = reservations[index];
      reservations.splice(index, 1);
      return removedReservation;
    }

    throw new Error("Room to be removed does not exist");
  }

  // The getReservations function returns all current reservations.
  function getReservations() {
    return reservations;
  }

  // The isAvailable function checks if a room is available for a new reservation.
  function isAvailable(reservation) {
    const checkIn = reservation.checkIn;
    const checkOut = reservation.checkOut;

    for (const currentReservation of reservations) {
      const currentCheckIn = currentReservation.checkIn;
      const currentCheckOut = currentReservation.checkOut;

      if (
        (checkIn >= currentCheckIn && checkIn < currentCheckOut) ||
        (checkOut > currentCheckIn && checkOut <= currentCheckOut) ||
        (checkIn <= currentCheckIn && checkOut >= currentCheckOut)
      ) {
        if (currentReservation.roomNumber === reservation.roomNumber) {
          return false;
        }
      }
    }

    return true;
  }

  // The getAvailableRooms function returns a list of available rooms for a date range.
  function getAvailableRooms(checkIn, checkOut) {
    const availableRooms = [];

    for (let i = 1; i <= rooms; i++) {
      const reservation = { checkIn, checkOut, roomNumber: i };

      if (isAvailable(reservation)) {
        availableRooms.push(i);
      }
    }
    return availableRooms;
  }

  // The function returns an object with all available functions to interact with the system.
  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}


const MAIN_HOTEL = hotelSystem(5);

MAIN_HOTEL.addReservation({
  id: 1,
  name: 'Alexander',
  checkIn: '23/01',
  checkOut: '25/01',
  roomNumber: 1,
});

console.log(MAIN_HOTEL.getReservations());