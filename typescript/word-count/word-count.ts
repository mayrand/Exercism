class Words {
    count(input: string) {
        const words = input.replace(/\t/g, ' ').split(' ')
        const map = new Map()
        for (const word of words) {
            const lowerWord: string = word.toLowerCase().trim()
            if (lowerWord.length === 0) { continue }
            const match: number = map.get(lowerWord)
            if (match > 0) {
                const occurences: number = match + 1
                map.set(lowerWord, occurences)
            } else {
                map.set(lowerWord, 1)
            }
        }
        return map
    }
}

export default Words