class Gigasecond {
    dateFrom: Date
    constructor(date: Date) {
        this.dateFrom = date
    }
    date() {
        return new Date(this.dateFrom.getTime() + 10 ** 12)
    }
}

export default Gigasecond