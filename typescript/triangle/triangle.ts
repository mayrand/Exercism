export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind() {
        if (this.sides.every(x => x === this.sides[0]))
            return "equilateral"
        let valuez = this.sides.reduce(function (values: any, value) {
            if(value in values){
                values[value]++
            } else {
                values[value]=1
            }
            return values        
        })
        return "scalene"
    }
}