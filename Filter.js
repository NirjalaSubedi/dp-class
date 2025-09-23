//filtering array data
const num=[3,6,8,9,12]
const result=num.filter((numFilter)=>{
    return(numFilter>10)
})
console.log(result)

//filtering in string

const str=['a','e','i','o','u']
const strResult=str.map((strFilter)=>{
    return(strFilter.toUpperCase())
})

console.log(strResult)