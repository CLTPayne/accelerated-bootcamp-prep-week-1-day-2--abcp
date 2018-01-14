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
  return [...array, element]
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(array)
  return array
}

function accessElementInArray(array, index) {
  
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(element)
  return array
}

function removeElementFromEndOfArray(array) {
  array.slice(0, lastNum)
  return array
}
