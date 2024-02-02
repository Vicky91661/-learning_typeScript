"use strict";
// how to set a parameter in a function 
function greeting(n) {
    console.log("Hello ", n);
}
let n = "Vicky";
greeting(n);
// how to make return type in a function
function sum(num1, num2) {
    return num1 + num2;
}
const ans = sum(10, 34);
console.log(ans);
// How to paas a function to a fucntion
function delayedFun(fun) {
    setTimeout(fun, 2000);
}
function callback() {
    console.log("hello world");
}
delayedFun(callback);
function printName(user) {
    user.display("hey there");
    console.log(user.name);
}
const user1 = {
    name: "vicky",
    phone: 9166124770,
    display(s) {
        console.log(s);
    }
};
printName(user1);
