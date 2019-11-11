// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.


class Fraction {
    constructor (numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    addition(fraction) {
        let num, denom, numFirst, denomFirst, numSecond, denomSecond;
        numFirst = this.numerator;
        denomFirst = this.denominator;
        numSecond = fraction.numerator;
        denomSecond = fraction.denominator;
        if (denomFirst !== denomSecond) {
            denom = denomFirst * denomSecond;
            numFirst = numFirst * denomSecond;
            numSecond = numSecond * denomFirst;
        } else {
            denom = denomFirst;
        }
        num = numFirst + numSecond;
        this.numerator = num;
        this.denominator = denom;
        this.reduction();
    }

    subtraction(fraction){
        let num, denom, numFirst, denomFirst, numSecond, denomSecond;
        numFirst = this.numerator;
        denomFirst = this.denominator;
        numSecond = fraction.numerator;
        denomSecond = fraction.denominator;
        if (denomFirst !== denomSecond) {
            denom = denomFirst * denomSecond;
            numFirst = numFirst * denomSecond;
            numSecond = numSecond * denomFirst;
        } else {
            denom = denomFirst;
        }
        num = numFirst - numSecond;
        this.numerator = num;
        this.denominator = denom;
        this.reduction();
    }

    multiplication(fraction) {
        let num, denom, numFirst, denomFirst, numSecond, denomSecond;
        numFirst = this.numerator;
        denomFirst = this.denominator;
        numSecond = fraction.numerator;
        denomSecond = fraction.denominator;
        num = numFirst * numSecond;
        denom = denomFirst * denomSecond;
        this.numerator = num;
        this.denominator = denom;
        this.reduction();
    }

    division(fraction) {
        let num, denom, numFirst, denomFirst, numSecond, denomSecond;
        numFirst = this.numerator;
        denomFirst = this.denominator;
        numSecond = fraction.denominator;
        denomSecond = fraction.numerator;
        num = numFirst * numSecond;
        denom = denomFirst * denomSecond;
        this.numerator = num;
        this.denominator = denom;
        this.reduction();
    }

    reduction() {
        let num, denom, smaller, bigger, divider;
        num = Math.abs(this.numerator);
        denom = Math.abs(this.denominator);
        if (num > denom) {
            bigger = num;
            smaller = denom;
        } else {
            bigger = denom;
            smaller = num;
        }

        for (let i = smaller; i > 0; i--) {
            if (smaller % i == 0 && bigger % i == 0) {
                divider = i;
                break;
            }
        }
        if (divider > 0) {
            this.numerator = this.numerator / divider;
            this.denominator = this.denominator / divider;
        }
        
    }


    

};

// let _23 = new Fraction(2,3);
// let _45 = new Fraction(4,5);
// let _12 = new Fraction(1,2);
// let _46 = new Fraction(4,6);
// _23.addition(_45);
// _12.division(_12);
// _23.subtraction(_45);
// _46.reduction();

let _14 = new Fraction(1,4);
let _34 = new Fraction(3,4);
_34.subtraction(_34);
console.log(_34);