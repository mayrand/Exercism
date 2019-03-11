class CollatzConjecture {
    static counter: number = 0
    static steps(steps: number): number {
        if (steps === 1) {
            const result = this.counter
            this.counter = 0
            return result
        }
        if (steps < 1) { throw "Only positive numbers are allowed" }
        this.counter++
        if (steps % 2 === 0) {
            steps /= 2
        } else {
            steps = steps * 3 + 1
        }
        return CollatzConjecture.steps(steps)
    }
}

export default CollatzConjecture