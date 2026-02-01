//using array
const arr=[1,5,8,9,3]

//length properties
console.log(arr.length)
//paranthis xa vane thiyo method ho xaiina vane properties ho

//at method
console.log(arr.at(2))

//join method
console.log(arr.join("-"))

//push pop from array
console.log(arr.pop())
console.log(arr)
console.log(arr.push(100))
console.log(arr)

//shift unshift from array
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(78))
console.log(arr)
console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
//slice
console.log(arr.slice(1,3))

//splice
console.log(arr.splice(1,3,"nirjala"))
console.log(arr)

console.log("---------------------------------")
//Array of an string

const str=["orange","apple","bannana","pinaple"]
console.log(str)
console.log("length of an array:",str.length)
console.log("value at index 2:",str.at(2))
console.log("join all array string ",str.join(","))
console.log("remove last element:" ,str.pop())
console.log(str)
console.log("Add in  last element:" ,str.push("kiwi"))
console.log(str)
console.log("remove first element:" ,str.shift())
console.log(str)
console.log("Add in  first element:" ,str.unshift("grapes"))
console.log(str)
console.log("slice item between index 1 and 3",str.slice(1,3))
console.log("replace the slice item to coconut and orange:",str.splice(1,2,"coconut","orange"))
console.log(str)


