let obj={
    name:'nirjala',
    age:20

}
// const name=name.obj
// const age=age.obj

// const {name}=obj
// const {age}=obj

// const {name,age}=obj

// console.log(name,age)

const employee=[{
    name:"nirjala",
    address:"jhumka-5"
},{
    name:"Samikshya",
    address:"itahari"
    
}]
const {name,address}=employee
console.log(employee[0])
console.log("==================================")

const emp1={
    name:"shyam", address:"itahari"
}
const emp2={
    name:"ram",address:"jhumka"
}
const emp3={
    name:"rita",address:"dharan"
}
const emp=[emp1,emp2,emp3]
// console.log(emp[0].name)
// console.log(emp[2].address)
// console.log(emp[1])
for(let i=0;i<emp.length;i++){
    console.log("Name of employee",emp[i].name);
    console.log("Adress of",emp[i].name,"is",emp[i].address);
}

let Obj1=[{
    name:"sita", faculty:"bca"
},{
    name:"ram", faculty:"IT"
}]
for(let k in Obj1){
    console.log(Obj1[k])
}
console.log("*********")
let Arr=[1,2,3,4,5,6,7,8];

const a=6;
// {
//     a=19;
// }
console.log(a)
let str="nirjala"
{
str="rebika"
}
str="samikshya"
console.log(str)

var str1="hello"
{
    str1="world"
}
str1="hello world"
console.log(str1)


console.log("ooooooooooooooooooooooo")
let Obj2=[{
    name:"sita", faculty:"bca"
},{
    name:"ram", faculty:"IT"
}]
for(let k in Obj2){
    console.log("hello",k)
}

const arrayname=['nirjala','samikshya','yubraj'];
for(let name of arrayname){
    console.log(name)
}
