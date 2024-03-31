// The hotelSystem function is a hotel reservation system generator that manages reservations for a given number of rooms.

function hotelSystem (rooms) {
  // The reservations variable stores the reservations made.
  const reservations = []

  // The searchReservation function searches for a reservation by its ID and returns it if it exists.
  function searchReservation (id) {
    const index = reservations.findIndex((room) => room.id === id)

    if (index > -1) {
      return reservations[index]
    }

    throw new Error('Reservation does not exist')
  }

  // The getSortReservations function returns a copy of reservations sorted by check-in date.
  function getSortReservations () {
    const copy = [...reservations]

    copy.sort((a, b) => {
      const aDate = new Date(`${a.checkIn} ${new Date().getFullYear()}`)
      const bDate = new Date(`${b.checkIn} ${new Date().getFullYear()}`)
      return aDate - bDate
    })

    return copy
  }

  // The addReservation function adds a new reservation if the room is available.
  function addReservation (reservation) {
    if (!isAvailable(reservation)) {
      throw new Error('The room is occupied')
    }

    reservations.push(reservation)
    return `Reservation for ${reservation.name} was successfully scheduled`
  }

  // The removeReservation function removes a reservation by its ID and returns it if it exists.
  function removeReservation (id) {
    const index = reservations.findIndex((room) => room.id === id)

    if (index > -1) {
      const removedReservation = reservations[index]
      reservations.splice(index, 1)
      return removedReservation
    }

    throw new Error('Room to be removed does not exist')
  }

  // The getReservations function returns all current reservations.
  function getReservations () {
    return reservations
  }

  // The isAvailable function checks if a room is available for a new reservation.
  function isAvailable (reservation) {
    const checkIn = reservation.checkIn
    const checkOut = reservation.checkOut

    for (const currentReservation of reservations) {
      const currentCheckIn = currentReservation.checkIn
      const currentCheckOut = currentReservation.checkOut

      if (
        (checkIn >= currentCheckIn && checkIn < currentCheckOut) ||
          (checkOut > currentCheckIn && checkOut <= currentCheckOut) ||
          (checkIn <= currentCheckIn && checkOut >= currentCheckOut)
      ) {
        if (currentReservation.roomNumber === reservation.roomNumber) {
          return false
        }
      }
    }

    return true
  }

  // The getAvailableRooms function returns a list of available rooms for a date range.
  function getAvailableRooms (checkIn, checkOut) {
    const availableRooms = []

    for (let i = 1; i <= rooms; i++) {
      const reservation = { checkIn, checkOut, roomNumber: i }

      if (isAvailable(reservation)) {
        availableRooms.push(i)
      }
    }
    return availableRooms
  }

  // The function returns an object with all available functions to interact with the system.
  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms
  }
}

const MAIN_HOTEL = hotelSystem(5)

MAIN_HOTEL.addReservation({
  id: 1,
  name: 'Alexander',
  checkIn: '23/01',
  checkOut: '25/01',
  roomNumber: 1
})

console.log(MAIN_HOTEL.getReservations())
