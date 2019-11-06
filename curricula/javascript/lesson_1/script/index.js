/* FizzBuzz */
const numbers = [1,3,6,10,15,17,30]

























// const fizzBuzz = []
// let i = 0

// while(i < numbers.length) {
// 	if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
// 	    fizzBuzz[i] = "FizzBuzz"
//     }	

//     else if(numbers[i] % 3 === 0){
//         fizzBuzz[i] = "Fizz"
//     }
//     else if(numbers[i] % 5 === 0){
//         fizzBuzz[i] = "Buzz"
//     }
//     else{
//         fizzBuzz[i] = numbers[i]
//     }

//     i++
// }

// console.log(fizzBuzz)
// --> [1, "FizzBuzz", "FizzBuzz", "FizzBuzz", "FizzBuzz", 17, "FizzBuzz"]


/* For Loop */

let arr = ["first", "second", "third", "fourth", "fifth"]

// Right way round array traversal
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// // Back to front array traversal
// for(let i = 1; i <= arr.length; i++) {
//     console.log(arr[arr.length - i])
// }

// for(let i = arr.length-1; i >= 0; i-- ) {
//     console.log(arr[i]);
// }

/*-----Objects-----*/

/*Object literals - objects are created literally
which contrasts objects created from classes/constructors*/

const object = {}

const car = {
    make: "Toyota",
    model: "Yaris",
    "number of doors" : 5,
    transmissions: ["manual", "automatic"],
    fuelTypes: {
        hybrid: true,
        diesel: false,
        petrol: true,
    }
}

/*-----Accessing object values-----*/

// car.make
// car['make']
// // => "Toyota"
// car.model
// car['model']
// // => "Yaris"
// car.transmissions[0]
// car['transmissions'][0]
// // => "manual"
// car.fuelTypes.hybrid
// car['fuelTypes']['hybrid']
// // => true

// /*-----Setting-----*/

// car.make = 'Audi'
// car.make
// // => 'Audi'
// car['model'] = 'A6'
// car.model
// // => 'A6'

// car.fuelTypes['hybrid'] = false
// car.fuelTypes.hybrid 
// => false



/*-----Setting object properies dynamically using bracket notation-----*/

// const carStats = ["topSpeedInKM", "number of doors"]

// car[carStats[0]] = 240
// car.topSpeedInKM
// //=> 240

// car[carStats[1]] = 5
// // car.number of doors 
// // => Uncaught SyntaxError: Unexpected identifier

// car[carStats[1]]
// car["number of doors"]
// => 5

/*----------------------- */
Object.keys(car)
// => ["make", "model", "transmissions", "fuelTypes", "topSpeedInKM", "number of doors"]

Object.values(car)
 // => ["Audi", "A6", Array(2), {…}, 240, 5]
Object.entries(car)
// => 
/*[["make", "Audi"]
["model", "A6"]
["transmissions", Array(2)]
["fuelTypes", {…}]
["topSpeedInKM", 240]
["number of doors", 5]
...] 
*/


// Object's behaviour as a non-primitive

// const egg = {
//     hatched: false,
//     colour: 'brown',
//     potentialFathers: {
//         albert: 'Albert Eggstein',
//         cluck: 'Cluck Norris'
//     }
// }

// const egg2 = egg

// egg.hatched = true
// egg2.hatched
// // => true

// egg3 = Object.assign({}, egg)
// egg3.colour = 'white'
// egg.colour
// // => 'brown'

// egg.potentialFathers.ernst = "Ernst Henningway"

// egg3.potentialFathers
/* => {
    albert: 'Albert Eggstein',
    cluck: 'Cluck Norris',
    ernst: "Ernst Henningway"}
*/
//
// const independentEgg = JSON.parse(JSON.stringify(egg3))

// independentEgg.potentialFathers.ernst = 'Just Ernst'
// newEgg.potentialFathers.ernst
//=> 'Just Ernst'


/*-----Function definition-----*/
function double(int) {
    return 2 * int
}

/*-----Invoking a function-----*/
// double(2)
// => 4

/*-----Return values from invocing a function can be set on variables-----*/
// const y = double(5)
// console.log(y)
// --> 10


/*-----Functions have access to variables defined in the 
outer scope but the outer scope does not have access to 
variables defined inside the function
-----*/
// let temperature = 0

// function convertTo(scale) {
//     const modifier = 32

//     function convertToFahrenheit() {
//         return temperature * 1.8 + modifier
//     }

//     function convertToCelcius() {
//         return ((temperature - modifier) * 5/9)
//     }

//     if (scale === "Fahrenheit") {
//         return convertToFahrenheit()
//    }
//     else {
//         return convertToCelcius()
//    }
// }

// const convertedToFahreheit = convertTo("Fahrenheit")
// console.log(convertedToFahreheit)
// //--> 32
// console.log(modifier)
//--> Uncaught ReferenceError: modifier is not defined



/*-----ES6 Arrow functions-----*/
// const multiply = (int) => {
//     return int * int
// }

/*-----Arrow function does not need parenthesis around one argument-----*/
/*-----When curly brackets are discarded and only one statement is in the function body
then that statement becomes the return value of the function-----*/

// const isEven = int => int % 2 === 0
// isEven(4)
// //=> true

// const isOdd = (int) => {
//     int % 2 !== 0
// }
// isOdd(4)
//=> undefined



/*-----Passing functions by reference vs. passing them by value-----*/

// const greetings = ["Bonjour", "Hello", "Ciao"]

// const pick = (arr) => {
//     return arr[Math.floor(Math.random() * arr.length)]
// }

// const reactWithPick = (value, reference) => {
//     reference(`${value}, long time no see`)
// }

// reactWithPick(pick(greetings), alert)



/* Examples of pre-built functions for Strings 
https://www.w3schools.com/jsref/jsref_obj_string.asp
*/
const quote = `Saruman believes it is only great
 power that can hold evil in check. But that is 
 not what I have found. I've found it is the small things, 
 everyday deeds of ordinary folk that keeps the darkness at bay. 
 Simple acts of kindness and love. Why Bilbo Baggins? Perhaps it 
 is because I am afraid... and he gives me courage.`


//quote.includes("Bilbo")
//quote.repeat(4)
//quote.slice(107,243)
//quote.split(" ")

/* Examples of pre-built functions for Arrays 
https://www.w3schools.com/jsref/jsref_includes_array.asp
*/  

// const hobbits = ["Frodo", "Sam", "Merry", "Pippin"]

// hobbits.includes("Gandalf")
// hobbits.join(", ")
// hobbits.push("Bilbo")
// hobbits.find(hobbit => hobbit === "Sam")
// hobbits.forEach(hobbit => console.log(hobbit))
// hobbits.map(hobbit => hobbit.toLowerCase())
// hobbits.filter(hobbit => hobbit.length > 4)



/*-----Functions can be used as objects properties with 
keyword this to access other properties within the object-----*/

// const marju = {
//     firstName: "Marju",
//     lastName: "Hirsh",
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// marju.fullName()
//this refers to marju




