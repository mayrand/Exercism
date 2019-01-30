class ArmstrongNumbers {
    static isArmstrongNumber(num: number): boolean {
        let text = String(num)
        let sum = 0
        for (const i of text) {
            sum += Number(i) ** text.length
        }
        return sum === num
    }
}

export default ArmstrongNumbers