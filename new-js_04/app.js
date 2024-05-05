const itemDiv = document.getElementsByClassName('item')
const openDIv = document.getElementsByClassName('iconOPen')
const colseDiv = document.getElementsByClassName('iconClose') 


for(let i = 0;i<itemDiv.length;i++ ){
   
    colseDiv[i].style.display ="none"

    itemDiv[i].addEventListener('click',()=>{

      const result = itemDiv[i].classList.toggle("active")

      if(result){
        colseDiv[i].style.display ="block"
        openDIv[i].style.display ="none"
        
      }else{
        
            colseDiv[i].style.display ="none"
            openDIv[i].style.display ="block"
            
          
      }
    })
}