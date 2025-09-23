//filtering array data
const num=[3,6,8,9,12]
const result=num.filter((numFilter)=>{
    return(numFilter>10)
})
console.log(result)

//Map in string

const str=['a','e','i','o','u']
const strResult=str.map((strFilter)=>{
    return(strFilter.toUpperCase())
})

console.log(strResult)

//reduce
const reduceArr=[0,7,2,4,5]
const reduce=reduceArr.reduce((pre,curr)=>{
    return pre+curr
},0)
console.log(reduce)

