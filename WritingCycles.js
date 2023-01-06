//Написати цикли, які зможуть:

//Вивести на сторінку в один рядок через кому числа від 10 до 20.

let numLowerLimiter = 10
let i = 0
const arr = []
const arrSquare = []
while (numLowerLimiter <= 20) {
    arr[i] = numLowerLimiter
    arrSquare[i] = numLowerLimiter*numLowerLimiter
    i++
    numLowerLimiter++
}
alert(`Array numbers from 10 to 20: ${arr}`)
/**************************************************************/
//Вивести квадрати чисел від 10 до 20.
alert(`Array square of numbers from 10 to 20: ${arrSquare}`)
/*****************************************************************/
//Вивести таблицю множення на 7.
const tablMultSeven = []
let multiplier = 1
while (multiplier <= 10) {
    tablMultSeven[multiplier - 1] = `${multiplier} * 7 = ${multiplier* 7}\n`
    multiplier++
}
alert(`Multiplication table by 7:
 ${tablMultSeven.join(' ')}`)
/******************************************************************/
//Знайти суму всіх цілих чисел від 1 до 15.
let numElement = 0
let sumElements = 0
while (numElement <= 15) {
    sumElements = sumElements + numElement
    numElement++
}
alert(`Sum number from 1 to 15 : ${sumElements}`)
/***************************************************************/
//Знайти добуток усіх цілих чисел від 15 до 35.
let lowerNumber = 15
let increase = 1
while (lowerNumber <= 35) {
    increase = increase * lowerNumber
    lowerNumber++
}
alert(`Result increase number from 15 to 35 : ${increase}`)
/*****************************************************************/
//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let numItem = 1
let arithmeticSum = 1
while (numItem <= 500) {
    arithmeticSum = arithmeticSum + numItem
    numItem++
}
arithmeticMean = arithmeticSum / 500
alert(`Arithmetic mean number from 1 to 500 : ${arithmeticMean} `)
/*********************************************************************/
//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let initialElement = 30
let sumEven = 0
while (initialElement <= 80) {
    sumEven = sumEven + initialElement
    initialElement = initialElement + 2
}
alert(`Sum even number from 30 to 80 : ${sumEven}`)
/*******************************************************************/
//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let initialItem = 100
while (!Number.isInteger(initialItem / 3 )) {
    initialItem = initialItem + 1
}
const arrayMultOfThree = []
let divisibleNumber = initialItem
while (divisibleNumber <= 200) {
    arrayMultOfThree.push(divisibleNumber)
    divisibleNumber = divisibleNumber + 3
}
alert(`Divisible by three number from 
100 to 200 : ${arrayMultOfThree}`)
/*************************************************************************/
//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const numberOfUser = prompt('Enter the number' +
    'of divisors you want to know',"");
if (!isNaN(+numberOfUser) === true && (+numberOfUser) > 0) {
    const arrayDivisors = []
    let possibleNumber = 0
    while (possibleNumber <= Number(numberOfUser)) {
        possibleNumber++
        if (Number.isInteger(+numberOfUser / possibleNumber)) {
            arrayDivisors.push(possibleNumber)
        }
    }
    alert(`This number : ${numberOfUser} 
    can be divided into : ${arrayDivisors}`)

/**************************************************************/
// Визначити кількість його парних дільників.
let arrayDivisorsCopy = arrayDivisors.slice()
const arrayDivisorsEven = []
const arrayDivisorsOdd = []
for (let j = 0; j < arrayDivisorsCopy.length; j++) {
    if (Number.isInteger( arrayDivisorsCopy[j] / 2)) {
        arrayDivisorsEven.push(arrayDivisorsCopy[j])
    }
}
alert(`The number of even divisors is equal to : ${arrayDivisorsEven.length}`)
/******************************************************************/
//   Знайти суму його парних дільників.
let sumArrayEven = 0
for (let h = 0; h < arrayDivisorsEven.length; h++) {
    sumArrayEven = sumArrayEven + arrayDivisorsEven[h]
}
alert(`The sum even divisors is equal to: ${sumArrayEven}`)
}
else {
    alert(`Entered number is not validation`)
}
/*******************************************************************/
//    Надрукувати повну таблицю множення від 1 до 10.
const multiplicationTable = []
const  multiplicationTableAll = []
let row = 1
let column = 1
while (row <= 11 && column <= 10) {
multiplicationTable[(row - 1) + (column - 1)*10] = `${  row * column}`
    if (row*column < 10) {
        multiplicationTableAll.push('')
    }
multiplicationTableAll.push(multiplicationTable[(row - 1) + (column - 1)*10])
    row++
    if (row === 11) {
        multiplicationTableAll.push(`\n`)
        multiplicationTableAll.push(`${column + 1  }`)
        column ++
        row = row - 10
    }
}
multiplicationTableAll.pop()
alert(`Multiplication table :
        1    2    3    4    5    6    7    8    9  10
  1  ${(multiplicationTableAll.join('  '))}`)




