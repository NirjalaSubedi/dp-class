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