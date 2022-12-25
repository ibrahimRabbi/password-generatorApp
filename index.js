var input=document.querySelector('#input')
var btn=document.querySelector('#btn')
var result=document.querySelector('#result')


var uppercase=document.querySelector('#uppercase')
var lowercase=document.querySelector('#lowercase')
var number=document.querySelector('#number')
var symbol=document.querySelector('#symbol')




let upperarticale='ABCDEFGHIJKKLMNOPQRSTUVWXYZ'
let lowerarticale= upperarticale.toLocaleLowerCase()
let numberarticale='1234567890'
let symbolarticale='`!@#$%^&*,./?*;'


let arry=[]


function namefun(a) {
    return a.split('')
}

var upper=namefun(upperarticale)
var lower=namefun(lowerarticale)
var num=namefun(numberarticale)
var sym=namefun(symbolarticale)


btn.addEventListener('click', function() {
    if (input.value==0) {
        result.innerHTML='please input password length of number'
        result.style.color='red'
    }else{
        input.style.borderColor='green'
        result.style.color='black'
    }


    if (uppercase.checked==true) {
      arry= arry.concat(upper) 
    } 


    if (lowercase.checked==true) {
        arry=arry.concat(lower) 
     }


     if (number.checked==true) {
       arry= arry.concat(num) 
     } 


      if (symbol.checked==true) {
        arry=arry.concat(sym) 
     } 
     if (arry.length==0) {
         alert('plz choose a any kind of type thank you')
     }else{
        var bn=[]
         for (let i= 0;   i<input.value;  i++) {
             var rand=Math.floor(Math.random()*arry.length)
             
             bn.push(arry[rand])
             var final=bn.join('')
              result.innerHTML=final
         }
         
         
     }



      
    })













 