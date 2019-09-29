 //create an array of words
 var wordsArray = ["rabbit", "allows",
     "snail", "airport", "carrots", "duplex", "cigars", "river", "airbus"
 ]

 //Global variables//
 const maxGuess = 10
 var guessedLetters = []
 var wordGuess = []
 var word
 var numGuess
 var wins = 0


 function start() {
     numGuess = maxGuess

     // Get a new word
     word = wordsArray[Math.floor(Math.random() * wordsArray.length)].toUpperCase()
     console.log(word)

     // Reset word arrays
     guessedLetters = []
     wordGuess = []

     // Reset the guessed word
     for (var i = 0, j = word.length; i < j; i++) {
         // Put a space instead of an underscore between multi word "words"
         if (word[i] === " ") {
             wordGuess.push(" ")
         } else {
             wordGuess.push("_")
         }
     }
     //Display or hide different Div's on the page
     document.getElementById('youWin').style.display = 'none';
     document.getElementById('youLose').style.display = 'none';
     document.getElementById('startButton').style.display = 'none';
     document.getElementById('mainGame').style.display = 'block';

     // Update the Display
     updateDisplay()
 }


 function updateDisplay() {
     document.getElementById("totalWins").innerText = wins
     document.getElementById("currentWord").innerText = wordGuess.join("")
     document.getElementById("remainingGuesses").innerText = numGuess
     document.getElementById("guessedLetters").innerText = guessedLetters.join(" ")
 }


 // Check in keypressed is between A-Z or a-z
 function isAlpha(ch) {
     return /^[A-Z]$/i.test(ch);
 }


 // Once the HTML document has been completely loaded, Listen for keyboard Events
 document.addEventListener("DOMContentLoaded", function () {
     // Wait for key press
     document.onkeypress = function (event) {
         // Make sure key pressed is an alpha character
         if (isAlpha(event.key)) {
             checkForLetter(event.key.toUpperCase())
         }
     }


     // Check if letter is in word & process
     function checkForLetter(letter) {
         var foundLetter = false
         // Search string for letter
         for (var i = 0, j = word.length; i < j; i++) {
             if (letter === word[i]) {
                 wordGuess[i] = letter
                 foundLetter = true
                 // If guessing word matches random word
                 if (wordGuess.join("") === word) {
                     // Increment # of wins
                     wins++
                     updateDisplay()
                     document.getElementById('youWin').style.display = 'block';

                 }
             }
         }



         if (!foundLetter) {
             // Check if inccorrect guess is already on the list
             if (!guessedLetters.includes(letter)) {
                 // Add incorrect letter to guessed letter list
                 guessedLetters.push(letter)
                 // Decrement the number of remaining guesses
                 numGuess--
             }
             if (numGuess === 0) {
                 // Display word and display losing message
                 wordGuess = word.split()
                 document.getElementById('youLose').style.display = 'block';
             }
         }

         updateDisplay()
     }

 })