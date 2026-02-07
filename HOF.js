//foreach function
const arr=[5,94,6,58,7,9,12,34,67,]
arr.forEach((x)=>{
   // console.log(x+1)
   if(x>10){
    console.log(x)
   }
})

//Another example
//--------------------------
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
console.log("pppppppppppppppppppppppppppp")
let MapArr1=[1,2,3,4,5,6,7]
let Mapped1=MapArr1.map((num)=>{
   return num-1
})
console.log(MapArr1)
console.log(Mapped1)
console.log("okkkkkkkkkkkkkkkkkkkkkkkk")

//Another way of doing mapping
let MapArr=[1,2,3,4,5,6,7]
let Mapped=MapArr.map((num)=>num-1)
console.log(MapArr)
console.log(Mapped)

//Mapping in a string Array
let strMap=["nirjala","samikshya","prajina"]
let str=strMap.map((newString)=>{
    if(newString==strMap[0]){
        return newString
    }
})
console.log(str)

//using foreach to get index[ 0 ] element
console.log("================")
let str1=strMap.forEach((n)=>{
    if(n==strMap[0]){
        console.log(n)
    }
})

