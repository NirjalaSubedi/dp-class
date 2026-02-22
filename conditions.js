const isadmin=false
if(isadmin){
    console.log("welcome to admin dashboard")
}
else{
    console.log("You are not admin")
}

//mark 
let percentage=67;
if(percentage>=90&&percentage<=100){
    console.log("Grade:A+")
}
else if(percentage>=80&&percentage<90){
    console.log("Grade:A")
}
else if(percentage>=70&&percentage<80){
    console.log("Grade:B+")
}
else if(percentage>=60&&percentage<70){
    console.log("Grade:B")
}
else if(percentage>=50&&percentage<60){
    console.log("Grade:C+")
}
else if(percentage>=40&&percentage<50){
    console.log("Grade:A")
}
else if(percentage>=0&&percentage<40){
    console.log("You arer fail")
}

let mark=80
mark>=40?console.log("You are pass"):console.log("You are fail")

//for loop
for(let i=0;i<=5;i++){
    console.log("hello world",i)
}
//sum of first 10 numbers
let sum=0;
for(let i=1;i<=10;i++)
{
    sum+=i;
}
console.log("sum of first 10 numbers:",sum)

//for of loop implementation
//for array we use for of loop
sum=1
let arr=[1,3,2]
for(let x of arr){
    sum*=x
}
console.log(sum)

let str="nirjala"
for(let i of str){
    console.log(i)
}

const obj={
    name:"nirjala", faculty:"bca"
}
for(let i in obj){
    console.log(i,"is",obj[i])
}
 let sub11=["nepali", "english", "social"];
 for(let k in sub11){
    console.log(sub11);
 }
