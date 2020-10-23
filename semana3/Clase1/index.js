// Semana 3 -Sesión 01
// Every
const isAdult = (people) => {
    return people.age >= 18
}

const data = [
    {
        name: 'Daniel',
        age: 27
    },
    {
        name: 'Jose',
        age: 17
    },
    {
        name: 'Pedro',
        age: 20
    }
];

console.log(data.every(isAdult))

// Filter
console.log(data.filter(isAdult))
// Find
console.log('find',data.find(isAdult))
// Map
console.log(data.map(item => {
    item.age += 1
    return item;
}));

// Array from

const numbers = [0,2,6,7,9];
const newNumbers = Array.from(numbers, function increment(number) {
    return number + 1
})

console.log(newNumbers)

// Reducee
const summarize = (accumulator, number) => {
    return accumulator + number
}
const sum =  numbers.reduce(summarize, 0);
console.log(sum)
const sumx = numbers.reduce((acc, nm) => {
    return acc + nm
}, 0)
console.log(sumx)

const heroes = ['Batman', 'Robin'];
const villains = ['Joker', 'Bane'];

const everyone = heroes.concat(villains);
console.log(everyone);
const names = [...heroes, ...villains];
console.log('names', names)
// clone ...spread operator
const colors = ['white', 'black', 'gray']
const cloneColor = [...colors];
console.log(colors === cloneColor)
const cloneConcat = [].concat(colors);
console.log(colors === cloneConcat);
const cloneSlice = colors.slice();
console.log(colors === cloneSlice)
// Search
console.log(numbers.includes(2))
console.log(numbers.includes(200))
const numberA = [1,2,3,4,5];
const isEven = (number) => {
    return number % 2 === 0;
}

const evenNumber =  numberA.find(isEven);

console.log(evenNumber);

// Some
const numbersB = [1, 5, 7, 11, 22];
const odds = [1, 3, 3, 3];

console.log(numbersB.some(isEven))
console.log(odds.some(isEven));

// remove elements with spread operator

const batman = ['Batman', 'Catwoman', 'Joker', 'Robin'];
const fromIndex = 1;
const removeCount = 2;
const newNames = [
    ...batman.slice(0, fromIndex),
    ...batman.slice(fromIndex + removeCount)
];
console.log('slice spo',newNames);

// empty
const colorsC = ['Blue', 'Red', 'Yellow'];
console.log(colorsC.length = 0);
console.log('ColorsC', colorsC)
const colorsD = ['Black', 'Red', 'Yellow'];
console.log('ColorsD', colorsD.splice(0))
// fill
const numbersX = [1,2,3,4,5];
numbersX.fill(0);
console.log('numberX', numbersX)

const lengthB = 3;
const zeros = Array(lengthB).fill(0);
console.log(zeros);

// flatten

const numberValid = [0, [1,3,5], [2,4,6]];
const flatArray = numberValid.flat();
console.log('flatArray', flatArray)
// sort

const letters = ['B', 'H', 'D', 'J'];
letters.sort();
console.log('sort', letters);
// sort numbers

const numbersR = [4,3,1,2]

const compare = (n1,n2) => {
    if(n1 % 2 === 0 && n2 % 2 !== 0) {
        console.log('n1if1', n1, 'n2if1', n2)
        return -1
    }
    if(n1 % 2 !== 0 && n2 % 2 === 0){
        console.log('n1if2', n1, 'n2if2', n2)
        return -1
    }
    return 0;
}

numbersR.sort(compare);
console.log('number compare sort', numbersR)