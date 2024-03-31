function hotelSoftware (hotelRoom) {
  const ROOM_RESERVATION = []

  function searchReservation (id) {
    const INDEX_SEARCH = ROOM_RESERVATION.findIndex(
      (hotelRoom) => hotelRoom.id === id
    )

    if (INDEX_SEARCH > -1) {
      return ROOM_RESERVATION[INDEX_SEARCH]
    }
    throw new Error('The room was not found in the system')
  }

  function getSortReservations () {
    const ROOM_COPY = [...ROOM_RESERVATION]

    ROOM_COPY.sort((a, b) => {
      const A_DATE = new Date(`${a.checkIn} ${new Date().getFullYear}`)
      const B_DATE = new Date(`${b.checkIn} ${new Date().getFullYear}`)
      return A_DATE - B_DATE
    })
    return ROOM_COPY
  }

  function addReservation (reservation) {
    if (!isAvailable(reservation)) {
      throw new Error('Im sorry, this room is occupied')
    }
    ROOM_RESERVATION.push(reservation)
    return `Congratulations! new reservation: ${reservation.name}`
  }

  function removeReservation (id) {
    const INDEX_SEARCH = ROOM_RESERVATION.findIndex(
      (hotelRoom) => hotelRoom.id === id
    )

    if (INDEX_SEARCH > -1) {
      const RESERVATION_REMOVED = ROOM_RESERVATION[INDEX_SEARCH]
      ROOM_RESERVATION.splice(INDEX_SEARCH, 1)
      return RESERVATION_REMOVED
    }
    throw new Error('The reservation that you are looking for does not exist')
  }

  function getReservations () {
    return ROOM_RESERVATION
  }

  function isAvailable (reservation) {
    const checkIn = reservation.checkIn
    const checkOut = reservation.checkOut

    for (const ACTUAL_RESERVATION of ROOM_RESERVATION) {
      const ACTUAL_CHECK_IN = ACTUAL_RESERVATION.checkIn
      const ACTUAL_CHECK_OUT = ACTUAL_RESERVATION.checkOut

      if (
        (checkIn >= ACTUAL_CHECK_IN && checkIn < ACTUAL_CHECK_OUT) ||
                (checkOut > ACTUAL_CHECK_IN && checkOut <= ACTUAL_CHECK_OUT) ||
                (checkIn <= ACTUAL_CHECK_IN && checkOut >= ACTUAL_CHECK_OUT)
      ) {
        if (ACTUAL_RESERVATION.roomNumber === reservation.roomNumber) {
          return false
        }
      }
    }
    return true
  }

  function getAvailableRooms (checkIn, checkOut) {
    const AVAILABLE_ROOMS = []

    for (let i = 1; i <= hotelRoom; i++) {
      const RESERVATION = { checkIn, checkOut, roomNumber: i }

      if (isAvailable(RESERVATION)) {
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

const MAIN_HOTEL = hotelSoftware(10)
MAIN_HOTEL.addReservation({
  id: 1,
  name: 'Alexander',
  checkIn: '23/01',
  checkOut: '28/01',
  roomNumber: 1
})

MAIN_HOTEL.addReservation({
  id: 0,
  name: 'Nathaly',
  checkIn: '24/01',
  checkOut: '28/01',
  roomNumber: 2
})

console.log(MAIN_HOTEL.getReservations())
console.log(MAIN_HOTEL.searchReservation(1))
console.log(MAIN_HOTEL.getSortReservations())
console.log(MAIN_HOTEL.getAvailableRooms('24/01', '28/01'))
console.log(MAIN_HOTEL.removeReservation(0))
console.log(MAIN_HOTEL.getReservations())
