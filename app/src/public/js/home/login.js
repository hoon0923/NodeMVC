"use strict"

console.log("Login JS");

const id = document.querySelector("#id"),
pw = document.querySelector("#pw"),
loginBtn = document.querySelector("Button")

console.log(id)
console.log(pw)
console.log(loginBtn)

loginBtn.addEventListener("click" , login);

function login(){
    console.log("login start")

    const req = {
        id : id.value,
        pw : pw.value
    }

    console.log(req)

}