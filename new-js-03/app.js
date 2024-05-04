let cumpGuess;
let userGuess=[];
let userNumUpdate = document.getElementById("textOutput")
let userGusseUpdate =document.getElementById("inputBox")
const init =()=>
    {
        cumpGuess = Math.floor(Math.random()*100)

        document.getElementById("newGameButton").style.display = "none"
        document.getElementById("gameArea").style.display = "none"
    }
    
    
    
    
    const startGame = ()=>{
        document.getElementById("welcomeScreen").style.display ="none"
        document.getElementById("gameArea").style.display = "block"

  }

  const newGameBegin=()=>{

    window.location.reload()
  }
          
   
const startNewGame =()=>{
    document.getElementById("newGameButton").style.display = "inline"
    userGusseUpdate.setAttribute("disabled",true)

}


 const compareGuess=()=>{

       const userNumber  = Number(document.getElementById("inputBox").value)
       userGuess =[...userGuess ,userNumber]
        document.getElementById("guesses").innerHTML = userGuess
      
        if(userGuess.length < maxGuess){

        if(userNumber > cumpGuess){
            userNumUpdate.innerHTML ="Your guess is High "
            userGusseUpdate.value =""
        }
        else if(userNumber < cumpGuess){
            userNumUpdate.innerHTML = " Your  guess is low"
            userGusseUpdate.value =""
        }
        else{
            userNumUpdate.innerHTML="It is Correct!"
            userGusseUpdate.value =""

            startNewGame();
        }
    }else{
        if(userNumber > cumpGuess){
            userNumUpdate.innerHTML =`you Loose !! correct number was ${cumpGuess}`
            userGusseUpdate.value =""
            
            startNewGame();
        
        }
        else if(userNumber < cumpGuess){
            userNumUpdate.innerHTML = `you Loose !! correct number was ${cumpGuess}`
            userGusseUpdate.value =""
            startNewGame();
        }
        else{
            userNumUpdate.innerHTML="It is Correct!"
            userGusseUpdate.value =""

            startNewGame();
        }
    }
        document.getElementById("attempts").innerHTML = userGuess.length;

  }

   const  eseyMode = ()=>{
       maxGuess = 10;
    startGame();
         
    }
   const  hardModde = ()=>{
       maxGuess =5;
    startGame();

    }