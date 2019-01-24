class Squares {
    count: number
    squareOfSum: number
    sumOfSquares: number
    difference: number

    constructor(count: number) {
        this.count = count
        this.squareOfSum = this._squareOfSum()
        this.sumOfSquares = this._sumOfSquares()
        this.difference = this.squareOfSum - this.sumOfSquares
    }

    _squareOfSum() {
        let sum = 0
        for (let _i = 1; _i <= this.count; _i++) {
            sum += _i
        }
        return sum * sum
    }

    _sumOfSquares() {
        let sum = 0
        for (let i = 1; i <= this.count; i++) {
            sum += i * i
        }
        return sum
    }
}

export default Squares