 //Global variables//

 var word = "";
 var wordGuess = [];
 var wrongGuess = [];
 var guessBomb = 0;
 var winCount = 1;
 var guess = "";

 function wordsArray() {
     //create an array of words
     var randomWords = ["rabbit", "allows",
         "snail", "airport", "carrots", "duplex", "cigars", "river", "airbus"
     ]
     var raNum = Math.floor(Math.random() * 9);
     return randomWords[raNum]
 }
 //When the enter key is pressed a new word is slected and the Current Word section is replaced with dashes
 window.onload = function () {
     //randomWord = [];
     start();
     //wordStart();
 };

 function wordStart() {
     var wordLength = word.length;
     var wordL_ = "";
     var count = wordLength;
     while (count > 0) {
         wordGuess.push(" _ ");
         count -= 1;
     }
 }

 function winCountFunc() {
     var num = 0;
     var lettUsed = "";
     var count = word.length;
     while (count > 0) {
         if (lettUsed.includes(word[count - 1])) {} else {
             num += 1;
             lettUsed += word[count - 1];
         }
         count -= 1;
     }
     return num;
 }
 //function to start the game when load browser
 function start() {
     word = wordsArray();
     console.log(word);

     winCount = winCountFunc();
     guessBomb = word.length + 4;
     console.log(word);

     //document.getElementById('mainGame').style.display = 'block';
     document.getElementById("question").innerHTML = "Enter your first guess";

     wordStart();

     document.getElementById('RRguess').style.display = 'block';
     document.getElementById("rightGuess").innerHTML = "word progress: " + wordGuess;
     document.getElementById("wrongGuess").innerHTML = "Wrong guesses: " + wrongGuess;
     document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + guessBomb;
 }

 function enterGuess() {
     var lett = document.getElementById("guess").value;
     document.getElementById("guess").value = "";
     console.log(lett);

     if (lett.length === 1) {
         var rightOnot = isRightOnot(lett);
         if (rightOnot == true) {
             NewCW(lett);
         } else {
             if (!wrongGuess.includes(lett)) {
                 console.log("wrongGuess");
                 wrongGuess.push(lett);
             }
             guessBomb -= 1;
         }
     } else if (lett.length < 1) {

     }
     // else {
     //     guessBomb -= 1;
     // }

     if (guessBomb <= 0) {
         document.getElementById('youLose').style.display = 'block';
         document.getElementById("correctWordWas").innerHTML = "The correct word was " + word;
     }
     if (winCount <= 0) {
         document.getElementById('youWin').style.display = 'block';
     }
     document.getElementById("rightGuess").innerHTML = "word progress: " + wordGuess;
     document.getElementById("wrongGuess").innerHTML = "Wrong guesses: " + wrongGuess;
     document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + guessBomb;
 }


 //his function check if the Random word
 //contains the guessed letter return the letter

 function isRightOnot(a) {
     var n = word.includes(a);
     return n;
 }

 function NewCW(letter) {
     var count = 0;
     winCount -= 1
     while (count <= word.length - 1) {
         if (letter === word[count]) {
             if (wordGuess[count] === letter) {} else {}
             wordGuess[count] = letter;
             count += 1;
         } else {
             count += 1;
         }
     }
 }
 //This function will reset the game
 function restart() {
     location.reload();
 }