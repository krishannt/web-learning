const charval =document.getElementById("textarea");
let totalcount = document.getElementById("Total-counter")
let remainingcoubt = document.getElementById("Remaning-counter")

let userchar = 0;


const updatecount = ()=>{
    userchar = charval.value.length;
    totalcount.innerText = userchar;
   
     remainingcoubt.innerText = 200-userchar;
    
}
charval.addEventListener('keyup' ,()=>updatecount());

const copyText = ()=>{
      
    charval.select();
    charval.setSelectionRange(0,99999)
    navigator.clipboard.writeText(charval.value)
}