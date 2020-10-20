let selectElementsStartingWithA = (array) => {
    return array.filter((elem)=>{
        return elem.charAt(0) === 'a'
    })
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter((elem)=>{
        return /[aeiou]/gi.test(elem[0])
    })
}

let removeNullElements = (array) => {
    return array.filter((elem)=>{
        if(elem===null){
            return false
        }
        return true
    })
}

let removeNullAndFalseElements = (array) => {
    return array.filter((elem)=>elem || elem===0)
}

let reverseWordsInArray = (array) => {
    return array.map((elem)=>{return elem.split('').reverse().join('')})
}

let everyPossiblePair = (array) => {

    return array.sort().map((elem, i)=>{
        if (i===array.length-1) {
            return [array[i], array[0]];
        } else {
            return [array[i], array[i+1]];
        }
    }).map((elem)=>elem.sort()).sort()
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3)
}

let addElementToBeginning = (array, element) => {
    return [element].concat(array)
}

let sortByLastLetter = (array) => {
    return array.map((elem)=>{return elem.split('').reverse().join('')}).sort().map((el)=>{return el.split('').reverse().join('')})
}

let getFirstHalf = (string) => {
    return string.slice(0, Math.round(string.length/2));
}

let makeNegative = (number) => {
    return Math.abs(number)*(-1);
}

let numberOfPalindromes = (array) => {
    return array.filter((elem)=>elem===elem.split('').reverse().join('')).length
}

let shortestWord = (array) => {
    return array.reduce((accum, current)=>{
        if (accum.length <current.length) {
            return accum
        } else {
            return current
        }
    })
}

let longestWord = (array) => {
    return array.reduce((accum, current)=>{
        if (accum.length > current.length) {
            return accum
        } else {
            return current
        }
    })
}

let sumNumbers = (array) => {
    return array.reduce((accum,value)=>accum+value)
}

let repeatElements = (array) => {
    return [...array, ...array]
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((accum,value)=>{
        return accum + value
    })/array.length
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0,6)
}

let convertArrayToObject = (array) => {
    return
}

let getAllLetters = (array) => {
    return [...new Set(array)].join('').split('').sort()
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return Math.floor(number) + 1
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return Math.sqrt(number)
}

let factorial = (number) => {
    let result = 1;
    for (let i = 1; i<=number ; i++){
        result = result*i
    }
    return result;
}

let findAnagrams = (string) => {
    return string === [...string].reverse().join('')
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
