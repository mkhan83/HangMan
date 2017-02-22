
   var wordList = [
   "Jouney", 
   "Eagles", 
   "LedZepplin"];
   
   var chosenWord = "";
   var lettersInChosenWord = [];
   var numblanks = 0;
   var blanksAndSuccesses = [];
   var wrongGuesses= [];

   var winCounter =0;
   var lossCounter = 0;
   var numGuesses = 9;

   function startGame(){
   
   var numGuesses = 9;
   var blanksAndSuccesses = [];
   var wrongGuesses= [];

   chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
   lettersInChosenWord = chosenWord.split("");
   numBlanks = lettersInChosenWord.length;
   console.log(chosenWord);
   console.log (numblanks)

      for(var i = 0; i < numBlanks; i++){
         blanksAndSuccesses.push("_");
      }
   console.log(blanksAndSuccesses);
   document.getElementById('word-blank').innerHTML= blanksAndSuccesses.join('');
   document.getElementById('guesses-left').innerHTML = numGuesses;

   }

   function checkLetters(letter){
   
   var letterInWord = false;
   for(var i = 0; i < numBlanks; i++){
      if(chosenWord [i]===letter){
         letterInWord = true;
      }

   }

   if(letterInWord){
      for(i = 0; i < numBlanks; i++){
         blanksAndSuccesses[i] = letter;
      }
      console.log("inside our checkLetter function", blanksAndSuccesses);
      }

   else{
      numGuesses --;
      wrongGuesses.push(letter)
   }
}
   function roundComplete(){
   document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join("");
   document.getElementById('guesses-left').innerHTML = numGuesses;
   document.getElementById('wrongGuesses').innteHTML = wrongGuesses.join("");

   console.log(lettersInChosenWord);
   console.log(blanksAndSuccesses);

   if(lettersInChosenWord === blanksAndSuccesses){
      winCounter++;
      alert("You win!!");
      document.getElementById('win-counter').innerHTML = winCounter;
            startGame();

   }else if(numGuesses === 0){
      document.getElementById('lossCounter').innerHTML = lossCounter++;
      alert("You dont have anymore guesses you loser")
      startGame();




   }
   startGame();
   document.onkeyup = function(event){
   var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
   console.log("this is the letter we typed",letterGuessed);
   checkLetters(letterGuesses)


 }
}  

