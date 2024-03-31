// Practice of the Twentieth challenge

/* Flight: permite crear vuelos regulares con los atributos origin (origen), destination (destino), 
date (fecha de salida), capacity (capacidad máxima), price (precio) e inicilizará una variable llamada passengers la cual será el array donde almacenaremos a los pasajeros 
(con los atributos de fullName y age por cada pasajero). Además, incluirá el método sellTicket(passenger) para vender un boleto a un pasajero específico siempre 
y cuando la capacidad sea mayor a cero. Este método agregará al pasajero a la lista de pasajeros del avión y a su vez agregará el vuelo a la lista de vuelos del pasajero. 
La función devolverá un objeto reservation. */

class Flight {
    constructor(origin, destination, date, capacity, price) { 
        this.origin = origin; 
        this.destination = destination; 
        this.date = date; 
        this.capacity = capacity; 
        this.price = price; 
        this.passengers = []; 
    } 

    sellTicket(passenger) {
        if (this.capacity > 0) { 
            this.capacity--; 
            this.passengers.push({ 
                fullName: `${passenger.name} ${passenger.lastName}`, 
                age: passenger.age, 
            });
            passenger.flights.push({ 
                origin: this.origin, 
                destination: this.destination, 
                date: this.date, 
                price: this.price 
            });
            return new Reservation(this, passenger); 
        } else {
            return undefined;
        } 
    } 
} 

/* Passenger: cada pasajero tendrá los atributos name (nombre), lastName (apellido) y age (edad) 
y se inicializará con una lista de vuelos (flights) vacía. Cada que se agregue un vuelo a dicha lista, solo deberán agregarse las siguientes propiedades: 
origin, destination, date y price. */

class Passenger {
    constructor (name, lastName, age) {
        this.name = name; 
        this.lastName = lastName; 
        this.age = age; 
        this.flights = []; 
    }
}

/* Reservation aceptará un objeto flight y un objeto passenger, e incluirá el método reservationDetails() que devolverá un objeto con los detalles de la reservación, 
incluyendo origin, destination, date y reservedBy (nombre completo del pasajero). */

class Reservation {
    constructor(flight, passenger) {
        this.flight = flight; 
        this.passenger = passenger; 
    }

    reservationDetails() {
        return {
            origin: this.flight.origin, 
            destination: this.flight.destination, 
            date: this.flight.date, 
            reservedBy: `${this.passenger.name} ${this.passenger.lastName}`, 
        }
    }
}

/* PremiumFlight extenderá de la clase Flight y 
agregará la propiedad specialService que será un costo adicional al precio del vuelo dentro del método sellTicket(passenger). */

class PremiumFlight extends Flight {
    constructor(origin, destination, date, capacity, price, specialService) {
        super(origin, destination, date, capacity, price);
        this.specialService = specialService;
    }

    sellTicket(passenger) {
        const RESERVATION = super.sellTicket(passenger);
        if (RESERVATION) {
            RESERVATION.flight.price += this.specialService;
        }
        return RESERVATION;
    }
}

/* EconomicFlight de igual manera, extenderá de la clase Flight y aplicará un descuento del 20% dentro del método sellTicket(passenger) 
para los pasajeros con una edad menor a 18 años o mayor a 65 años. */

class EconomicFlight extends Flight {
    constructor(origin, destination, date, capacity, price) {
        super(origin, destination, date, capacity, price);
    }

    sellTicket(passenger) {
        if (passenger.age < 18 || passenger.age > 65) {
            const RESERVATION = super.sellTicket(passenger);
            if (RESERVATION) {
                RESERVATION.flight.price *= 0.8;
                return RESERVATION;
            }
        }
    }
}