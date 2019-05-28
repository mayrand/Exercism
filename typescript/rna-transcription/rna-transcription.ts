class Transcriptor {
    toRna(s: string) {
        let result: string = "";
        for (let letter of s) {
            result += this.transcript(letter)
        }
        return result
    }

    transcript(s: string) {
        switch (s) {
            case 'G':
                return 'C'
            case 'C':
                return 'G'
            case 'T':
                return 'A'
            case 'A':
                return 'U'
            default:
                throw "'Invalid input DNA.'"
        }
    }
}

export default Transcriptor