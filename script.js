//this code is for displaying the keybord keys values or codes after taping them in the input field
let myinput = document.querySelector(".myinput")  


myinput.addEventListener("keydown", (e) =>{
    e.altKey || e.ctrlKey || e.shiftKey ? alert(`It is a ${e.key} key pressed`) : alert(`Your key code is : ${e.keyCode}`) 
    console.log(typeof e.key)
}) 


//this code is to prevent the context menu from being displayed 
document.body.addEventListener("contextmenu", (e) =>{
    e.preventDefault()
}) 

//this code is for displaying time  
let btn = document.querySelector("#clock") 
let mypg = document.querySelector("#mypg")
let myInterval 

btn.addEventListener("click", () =>{
    myInterval = setInterval(()=>{
        let date = new Date() 
        mypg.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }, 1000)
    
    alert("Clock Started !") 
})  

document.body.addEventListener("keydown", (e) =>{
    e.altKey && e.key === "w" ? clearInterval(myInterval) & alert("Clock Stopped !") : null
})