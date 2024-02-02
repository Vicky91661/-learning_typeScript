// how to set a parameter in a function 
function greeting(n:string){
    console.log("Hello ",n)
}

let n:string ="Vicky";
greeting(n);

// how to make return type in a function
function sum(num1:number,num2:number):number{
    return num1+num2;
}
const ans:number = sum(10,34);
console.log(ans)


// How to paas a function to a fucntion
function delayedFun(fun:()=>void){
    setTimeout(fun,2000)
}
function callback():void{
    console.log("hello world");
}
delayedFun(callback)

//Learningn the Interfaces
interface User{
    name:string;
    phone?:number;
    display(name:string):void;
}

function printName(user:User):void{
    user.display("hey there")
    console.log(user.name);
}

const user1={
    name:"vicky",
    phone:9166124770,
    display(s:string):void{
        console.log(s)
    }
}
printName(user1)
