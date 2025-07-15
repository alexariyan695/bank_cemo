const Deposite=document.getElementById("Demo")
const Widthdraw=document.getElementById("take")
const balance1=document.getElementById("balance")
const input=document.getElementById("deposite")
const btn1=document.getElementById("button")
const inp=document.getElementById("inp")
const btnon=document.getElementById("btnon")
let abujor=0
btn1.addEventListener("click",()=>{
    const inputnumber=parseInt(input.value)
    const privious=parseInt(Demo.innerText)
    const total= inputnumber+privious

    abujor=abujor+inputnumber
    Demo.innerText=abujor
    

    const balance1=parseInt(balance.innerText)

    const main=parseInt(input.value)
    
    const tot= balance1+main
    balance.innerText=tot

    

    

})

let sum=0
btnon.addEventListener("click",()=>{
    const inputn=parseInt(inp.value)
    const pri=parseInt(take.innerText)
    const tot= inputn+pri
    sum=sum+inputn
    take.innerText=sum


   const hh=parseInt(inp.value)
   const ff=parseInt(balance.innerText)
   const max=ff-hh
   balance.innerText=max
    

    
    

 

})

btnon.addEventListener("click",()=>{

    if(balance.innerText<inp.value){
        alert ("Vhi apner kasay ato take ni")
         tkae.innerText=""
        
    }

   
})