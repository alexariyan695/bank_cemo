const Deposite=document.getElementById("Deposite")
const Widthdraw=document.getElementById("Widthdraw")
const balance=document.getElementById("balance")
const input=document.getElementById("deposite")
const btn1=document.getElementById("button")
const input2=document.getElementById("widthdraw")
const btn2=document.getElementById("btn-2")

btn1.addEventListener("click",()=>{
    
    const result=input.value
    Deposite.innerText=result
    
    const sum=20+result
    balance.innerText=sum
    

    


    
            


})


