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
};

let addition = function(a, b) {
    let num, denom, numFirst, denomFirst, numSecond, denomSecond;
    numFirst = a.numerator;
    denomFirst = a.denominator;
    numSecond = b.numerator;
    denomSecond = b.denominator;
    if (denomFirst !== denomSecond) {
        denom = denomFirst * denomSecond;
        numFirst = numFirst * denomSecond;
        numSecond = numSecond * denomFirst;
    } else {
        denom = denomFirst;
    }
    num = numFirst + numSecond;
    let sum = new Fraction(num, denom);
    reduction(sum);
    return  sum;
}

let subtraction = function(a,b) {
    let num, denom, numFirst, denomFirst, numSecond, denomSecond;
    numFirst = a.numerator;
    denomFirst = a.denominator;
    numSecond = b.numerator;
    denomSecond = b.denominator;
    if (denomFirst !== denomSecond) {
        denom = denomFirst * denomSecond;
        numFirst = numFirst * denomSecond;
        numSecond = numSecond * denomFirst;
    } else {
        denom = denomFirst;
    }
    num = numFirst - numSecond;
    let sum = new Fraction(num, denom);
    reduction(sum);
    return  sum;
}

let multiplication = function(a,b) {
    let num, denom, numFirst, denomFirst, numSecond, denomSecond;
    numFirst = a.numerator;
    denomFirst = a.denominator;
    numSecond = b.numerator;
    denomSecond = b.denominator;
    num = numFirst * numSecond;
    denom = denomFirst * denomSecond;
    let sum = new Fraction(num, denom);
    reduction(sum);
    return  sum;
}

let division = function(a,b) {
    let num, denom, numFirst, denomFirst, numSecond, denomSecond;
    numFirst = a.numerator;
    denomFirst = a.denominator;
    numSecond = b.denominator;
    denomSecond = b.numerator;
    num = numFirst * numSecond;
    denom = denomFirst * denomSecond;
    let sum = new Fraction(num, denom);
    reduction(sum);
    return  sum;
}



let reduction = function(fraction) {
    let num, denom, smaller, bigger, divider;
    num = Math.abs(fraction.numerator);
    denom = Math.abs(fraction.denominator);
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
        fraction.numerator = fraction.numerator / divider;
        fraction.denominator = fraction.denominator / divider;
    }
}

let _23 = new Fraction(2,3);
let _45 = new Fraction(4,5);
let _12 = new Fraction(1,2);
let _46 = new Fraction(4,6);
console.log(addition(_45, _23));
console.log(division(_12, _12));
console.log(subtraction(_45, _23));


// let _14 = new Fraction(1,4);
// let _34 = new Fraction(3,4);
//_34.subtraction(_34);
//console.log(_34);
// let check = addition(_34, _14);
// console.log('check1', check);
// reduction(check);
// console.log(check);
// let check2 = addition(_14, _34);
// console.log('check2', check2);

// check2 = addition(check2, _14);
// console.log('check2', check2);
// console.log('check1', check);

// check2 = subtraction(check2, _14);

// check2 = 1;
// console.log('check2', check2);


