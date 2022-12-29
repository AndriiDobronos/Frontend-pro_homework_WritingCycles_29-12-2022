let num = 10
let i = 0
let arr = []
let arrSquare = []
while (num <= 20) {
    arr[i] = num
    arrSquare[i] = num*num
    i++
    num++
}
alert(`Array numbers from 10 to 20: ${arr}`)
/**************************************************************/
alert(`Array square of numbers from 10 to 20: ${arrSquare}`)
/*****************************************************************/
let tablMultSeven = []
let k = 1
while (k <= 10) {
    tablMultSeven[k-1] = `${k} * 7 = ${k * 7}\n`
    k++
}
alert(`Multiplication table by 7:
 ${tablMultSeven}`)
/******************************************************************/
let n = 0
let sum = 0
while (n <= 15) {
    sum = sum + n
    n++
}
alert(`Sum number from 1 to 15 : ${sum}`)
/***************************************************************/
let l = 15
let increase = 1
while (l <= 35) {
    increase = increase * l
    l++
}
alert(`Result increase number from 15 to 35 : ${increase}`)
/*****************************************************************/
let p = 1
let arithmeticSum = 1
while (p <= 500) {
    arithmeticSum = arithmeticSum + p
    p++
}
arithmeticMean = arithmeticSum / 500
alert(`Arithmetic mean number from 1 to 500 : ${arithmeticMean} `)
/*********************************************************************/
let c = 30
let sumEven = 0
while (c <= 80) {
    sumEven = sumEven + c
    c = c + 2
}
alert(`Sum even number from 30 to 80 : ${sumEven}`)
/*******************************************************************/
let f = 100
while (!Number.isInteger(f / 3 )) {
    f = f + 1
}
let arrayMultOfThree = []
let divisibleNumber = f
let w = 0
while (divisibleNumber <= 200) {
    arrayMultOfThree[w] = divisibleNumber
    w++
    divisibleNumber = divisibleNumber + 3
}
alert(`Divisible by three number from 100 to 200 : ${arrayMultOfThree}`)
/*************************************************************************/
let numberOfUser = Number(prompt('Enter the number' +
    'of divisors you want to know',""))
let arrayDivisors = []
let int = 0
let b = -1
while (int <= numberOfUser) {
    int++
    b++
    (Number.isInteger(numberOfUser / int)) ? arrayDivisors[b] = int :
        b = b - 1
}
alert(`This number : ${numberOfUser} can be divided into : ${arrayDivisors}`)
/**************************************************************/
let arrayDivisorsCopy = arrayDivisors.slice()
let arrayDivisorsEven = []
let arrayDivisorsOdd = []
for (let j = 0; j < arrayDivisorsCopy.length; j++) {
    if (Number.isInteger( arrayDivisorsCopy[j] / 2)) {
        arrayDivisorsEven.push(arrayDivisorsCopy[j])
    }
}
alert(`The number of even divisors is equal to : ${arrayDivisorsEven.length}`)
/******************************************************************/
let sumArrayEven = 0
for (let h = 0; h < arrayDivisorsEven.length; h++) {
    sumArrayEven = sumArrayEven + arrayDivisorsEven[h]
}
alert(`The sum even divisors is equal to: ${sumArrayEven}`)
/*******************************************************************/
let multiplicationTable = []
let  multiplicationTableAll = []
let m = 1
let d = 1
while (m <= 11 && d <= 10) {
    multiplicationTable[(m - 1) + (d - 1)*10] = `${m} * ${(d)} = ${m * d}\n`
    multiplicationTableAll.push(multiplicationTable[(m - 1) + (d - 1)*10])
    m++
    if (m === 11) {
        d++
        m = m - 10
    }
}
alert(`Multiplication table :
 ${multiplicationTableAll}`)
alert(`Length array Multiplication table : ${multiplicationTableAll.length}`)



