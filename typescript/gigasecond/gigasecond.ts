class Gigasecond {
    dateFrom: Date
    constructor(date: Date) {
        this.dateFrom = date
    }
    date() {
        return new Date(this.dateFrom.getTime() + 1000000000000)
    }
}

export default Gigasecond