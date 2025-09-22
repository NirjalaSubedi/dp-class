//foreach function
const arr=[5,94,6,58,7,9,12,34,67,]
arr.forEach((x)=>{
   // console.log(x+1)
   if(x>10){
    console.log(x)
   }
})

//Another example
const num=[3,6,8,22,34,12,1,5,7]
num.forEach((data)=>{
    if(data%2==0)
        console.log("Even numbers in array:",data)
})
console.log("------------------------------")
//Mapping

const newarr=arr.map((num1)=>{
        return num1+1
})
console.log(newarr)

//Note:-> map le value return garxa vane foreach le value return gardaiina

//Another example of mapping

let MapArr=[1,2,3,4,5,6,7]
let Mapped=MapArr.map((num)=>{
    return num-1
})
console.log(MapArr)
console.log(Mapped)