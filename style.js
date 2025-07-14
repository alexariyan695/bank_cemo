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

    

    

}),


btnon.addEventListener("click",()=>{
    const inputn=parseInt(balance.innerText)
    const main=parseInt(inp.value)

    const all= inputn-main
    
    take.innerText=all

    if(balance.innerText<inp.value){
        alert ("you havent' money")
        balance.innerText=""
    }
 

})