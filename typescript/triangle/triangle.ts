export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind() {
        if (!this.sides.every(x => x > 0) || this.sides[0] + this.sides[1] < this.sides[2] || this.sides[0] + this.sides[2] < this.sides[1] || this.sides[1] + this.sides[2] < this.sides[0]) {
            throw "Incorrect triangle!"
        }

        if (this.sides.every(x => x === this.sides[0])) {
            return "equilateral"
        }
        if (this.sides[0] !== this.sides[1] && this.sides[1] !== this.sides[2] && this.sides[0] !== this.sides[2]) {
            return "scalene"
        }
        return "isosceles"
    }
}