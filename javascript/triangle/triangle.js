//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.isTriangle = (a + b > c && b + c > a && a + c > b) && !(a <= 0 || b <= 0 || c <= 0);
    }

    isEquilateral() {
        return this.isTriangle && this.a === this.b && this.b === this.c && this.a === this.c;
    }

    isIsosceles() {
        return this.isTriangle && (this.a === this.b || this.b === this.c || this.c === this.a);
    }

    isScalene() {
        return this.isTriangle && this.a !== this.b && this.b !== this.c && this.c !== this.a;
    }
}
