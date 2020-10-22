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
    return array.reduce((accum, value, index)=>{
        if(index%2===0) {
            accum[value] = array[index+1]
        }
        return accum
    }, {})
}

let getAllLetters = (array) => {
    return [...new Set(array)].join('').split('').sort()
}

let swapKeysAndValues = (object) => {
    return Object.keys(object).reduce((accum, keys, i)=>{
        let values = Object.values(object);
        accum[values[i]] = keys
        return accum
    }, {})
}

let sumKeysAndValues = (object) => {
    return Object.keys(object).reduce((accum,keys,i)=>{
        let values = Object.values(object)
        return accum + parseInt(keys) + parseInt(values[i])
    }, 0)
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, '')
}

let roundUp = (number) => {
    return Math.floor(number) + 1
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString('fr-fr')
}

let getDomainName = (string) => {
    return string.split('@').pop().split('.com').shift()
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    
    return string.match(/^[a-zA-Z0-9 ]*$/) === null;
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

    let str = 'mad'
    for (let letter of str) {
        console.log(letter)
    }
    
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return Math.round((5*number - 160)/9)
}

let letterPosition = (array) => {
    return array.map((elem)=>elem.toUpperCase().charCodeAt(0) - 64)
}
