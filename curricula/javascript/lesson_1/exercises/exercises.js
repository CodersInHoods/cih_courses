/* Understanding Array methods */

/* 
forEach()
find()
map()
filter()

All of these methods are can be called on arrays
and all of them accept a callback function as an argument,
they all iterate over the array calling the function which was
passed in with each element of the array.
but all of these methods return something different.

Please create myForEach(), myFind(), myMap(), myFilter()
these functions should take 2 arguments - an array and a function
and mimic the behaviour of predefined corresponding array methods

- forEach returns undefined while calling the passed in function on each item.
- find returns the first element based on matching condition, if no elements match,
it returns undefined.
- map returns a new array of the same length as the original but with modified values
- filter returns a new array filled with all array elements that pass a test,
if nothing passes the test it returns an empty array.
*/
const myCollection = [1,2,3,4,5]


const myForEach = (collection, callback) => {
    for(let i = 0; i < collection.length; i++) {
        callback(collection[i])
    }
}

myForEach(myCollection, (item) => {
    console.log(item)
})

const myMap = (collection, callback) => {
    const newCollection = []
    for(let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]))
    }
    return newCollection
}

myMap(myCollection, (item) => {
    return item + 1
})
//returns [2,3,4,5,6]

const myFind = (collection, callback) => {
    for(let i = 0; i < collection.length; i++) {
        if(callback(collection[i])){
            return collection[i]
        }
    }
}

myFind(myCollection, (item) => {
    return item > 2
})
// returns 3

const myFilter = (collection, callback) => {  
    const newCollection = []
    for(let i = 0; i < collection.length; i++) {
        if(callback(collection[i])){
            newCollection.push(collection[i])
        }
    }
    return newCollection
}

myFilter(myCollection, (item) => {
    return item > 2
})

//returns [3,4,5]



/*-------------Exercise 2-------------*/

/* 
Consider this array 
[[8,7,56,2],
[20,4,4,5],
[2,1,0,44],
[78,9,7,1]]

As you notice there are several arrays within this one. 
Please find a way to produce a new array from this 
which should be made up of arrays. Those arrays should
hold 2 numbers: 
The smallest number of the nested array, 
and the biggest number of the nested array

[[2, 7], [4, 20], [0, 44], [1, 78]]

You can do this using any combination of loops and/or
array methods.

Bonus: consider doing the same thing with this array
[["oops",7,"oops",0],
[-10,0,0,0],
["1","7","6","0"],
[78,9,7.4,3,1]]

If the array doesnt hold any numeric values it should insert a string
to the new array  "No numbers found"

The resulting array should look like this:
[[0, 7], [-10, 0], "No numbers found",[1, 78]]

Keep in mind the nested arrays are not the same length and 
not all the values are of same type.
*/

//Solution with nested loop
const nestedArray = [[8,7,56,2],
[20,4,4,5],
[2,1,0,44],
[78,9,7,1]]

minMax = []

for(let i = 0; i < nestedArray.length; i++) {
	let smallest 
    let largest 
    
	for(let j = 0; j < nestedArray[i].length; j++){
        if (nestedArray[i][j] < smallest || smallest === undefined) {
			smallest = nestedArray[i][j]
        }
        if(nestedArray[i][j] > largest || largest === undefined) {
            largest = nestedArray[i][j]
        }
    }
    
	minMax[i] = [smallest, largest]
}

// Solution with map
const minMax = nestedArray.map(item => {
	return [Math.min(...item), Math.max(...item)]
})

//Solution with nested loops
nestedArray = [["oops",7,"oops",0],
[-10,0,0,0],
["1","7","6","0"],
[78,9,7.4,3,1]]

const minMax = []

for(let i = 0; i < nestedArray.length; i++) {
	let smallest 
    let largest 
    
	for(let j = 0; j < nestedArray[i].length; j++){
        if(typeof arr[i][j] !== "number") continue
        
        if (nestedArray[i][j] < smallest || smallest === undefined) {
			smallest = nestedArray[i][j]
        }
        if(nestedArray[i][j] > largest || largest === undefined) {
            largest = nestedArray[i][j]
        }
    }
    
	minMax[i] = smallest !== undefined ? [smallest, largest] : "No numbers found"
}

nestedArray.map(item => {
	const filteredArr = item.filter(i => typeof i === "number" )
	if (filteredArr.length === 0){
        return "No numbers found"
    }
	return [Math.min(...filteredArr), Math.max(...filteredArr)]
})


