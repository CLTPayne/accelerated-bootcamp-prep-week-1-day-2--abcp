function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return [element, ...array]
}
var array = ["function", "string"]
var newArray = ["element", ...array];

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element)
  return array
}

array.unshift("bolean")

function addElementToEndOfArray(array, element) {

}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push("number")

}

function accessElementInArray(array, index) {

}

function destructivelyRemoveElementFromBeginningOfArray(array) {

}

function removeElementFromBeginningOfArray(array) {
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
