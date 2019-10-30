
// var varHelloWorld = "Hello"
// console.log(varHelloWorld)
// var varHelloWorld = "Hello World"
// console.log(varHelloWorld)


// const constHelloWorld = "Hello World"
// console.log(constHelloWorld)




// var functionScoped = "hi"
// {
// 	var functionScoped = "bye"
// }

// let blockScoped = "hi"
// {
//     let blockScoped = "bye"
//     console.log(blockScoped)
// }


// Conditional statement
// const meaningOfLife = "34567890"

// if (meaningOfLife === 42) {
//     console.log("Thanks for all the fish")
//   } else if (meaningOfLife > 40 && meaningOfLife < 44) {
//     console.log("Not quite the answer I was expecting")
//   } else {
//     console.log("That's too far off")
//   }



// The while loop loops through a block of code as long as a specified condition is true.
// let text = ""
// let loopNum = 0
// while (text.length < 50) {
//     debugger
//     loopNum++
// 	console.log(text.length)
//     text += ` The number is ${loopNum}`
// }


/*-------------Exercise 1-------------*/

/* Given you have string "0123456789" 
please use a while loop to iterate over it.
The goal is to have 2 variables called numOdd and numEven with values of how many items in that
string times 3 are even and how many odd, these values should be numbers. 
at each iteration we should log out to the console a string which says
"<CURRENT ITEM IN THE STRING> times 3 is even" or "<CURRENT ITEM IN THE STRING> times 3 is odd"
*/

// const stringOfNums = "0123456789" 
// let numEven = 0
// let numOdd = 0
// let i = 0

// while(i != stringOfNums.length) {
//     if ((stringOfNums[i] * 3) % 2 === 0){
//         numEven++
//         console.log(`${stringOfNums[i]} times 3 is even`)    
//     }
//     else {
//         numOdd++
//         console.log(`${stringOfNums[i]} times 3 is odd`) 
//     }  
//     i++
// }



// const stringOfNums = "0123456789" 
// let numEven = 0
// let numOdd = 0
// let i = 0

// while(i != stringOfNums.length) {
//     let bool = (stringOfNums[i] * 3) % 2 === 0
//     bool ? numEven++ : numOdd++
//     console.log(`${stringOfNums[i]} times 3 is ${bool ? "even": "odd"}`)    
//     i++
// }








/*-------------Exercise 2-------------*/

/* 
Consider this array 
[["oops",7,"oops",0],
[-10,0,0,0],
["1","7","6","0"],
[78,9,7.4,3,1]]

As you notice there are several arrays within this one. 
Please find a way to produce a new array from this 
which should be made up of arrays. Those arrays should
hold 2 values: 
The smallest number of the nested array, 
and the biggest number of the nested array

If the array doesnt hold any numeric values it should insert a string
to the new array  "No numbers found"

The resulting array should look like this:
[[0, 7], [-10, 0], "No numbers found",[1, 78]]

Keep in mind the nested arrays are not the same length and 
not all the values are of same type.
*/
