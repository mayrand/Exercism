class ReverseString {
    static reverse(s: string) {
        //return [...s].reverse().join('')
        return s.split('').reverse().join('')
    }
}

export default ReverseString
