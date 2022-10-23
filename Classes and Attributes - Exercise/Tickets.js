function register(ticketsInfo, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let ticket of ticketsInfo) {
        let [destination, price, status] = ticket.split('|');

        if (!tickets.includes(ticket)) {
            tickets.push(new Ticket(destination, Number(price), status));
        }
    }

    if (criteria === 'destination') {
        tickets.sort((a, b) => (a.destination.localeCompare(b.destination)));
    }
    else if (criteria === 'price') {
        tickets.sort((a, b) => (a.price - b.price));
    }
    else {
        tickets.sort((a, b) => (a.status.localeCompare(b.status)));
    }

    return tickets;
}

console.table(register(['Philadelphia|94.20|available', 'New York City|95.99|available',
'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'));

console.table(register(['Philadelphia|94.20|available', 'New York City|95.99|available',
'New York City|95.99|sold', 'Boston|126.20|departed'], 'status'));