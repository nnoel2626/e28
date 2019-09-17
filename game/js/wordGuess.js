//create an array of words
var wordsArray = ["rabbit", "allows",
    "snail", "airport", "carrots", "duplex", "cigars", "river", "airbus"
];
//This will hold an list of words to guess in the game

//Global variables//

//variables to hold score count
// var wins = 0;
// var losses = 0;
// var guessesRemaining = 12;

//Empty arras to store letters guessed
var lettersGuessed = [];

//Empty arras to store the word to guess
var randomWord = [];
var answerArray = [];
// var word = [];


//When the enter key is pressed a new word is slected and the Current Word section is replaced with dashes
window.onload = function () {
    //randomWord = [];
    start();
};


//function to start  the game when load browser
function start() {
    //Randomizer to pick random a word from wordsToGuess array
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];


    console.log(randomWord);


    //This adds the dashes for the number of letters of the picked word
    answerArray = [];
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
    }
    console.log(answerArray);
    //Display the dotted random word in the page
    document.getElementById("current-letter").innerHTML = answerArray;

}



// ********* THE MAIN GAME LOOP ******************
//when the player enter a letter
//create a variable to hold the number of remainingLetters to be guessed
var remainingLetters = randomWord.length;

document.getElementById("submit").addEventListener("click", function () {

    var lettersGuessed = document.getElementById("guessed-letter").value;
    //console.log(lettersGuessed);

    //update the game state with the lettersGuessed
    for (var j = 0; j < randomWord.length; j++) {
        //if the letter they guessed is in the word //at that point or index 
        if (randomWord[j] == lettersGuessed) {
            //update the answer array with the letter they guessed 
            //at that point or index
            answerArray[j] = lettersGuessed;
            //subtract one from remaining letters 
            remainingLetters--;

            //Print letters guessed to page
            document.getElementById("current-letter").innerHTML = answerArray.join(" ");
            console.log(lettersGuessed);

            if (randomWord === answerArray) {
                document.getElementById("random-word").innerHTML = randomWord;
                alert(" Well done! The answer was " + randomWord);
            }


        }
    }


});

//let player know the word 
//alert(answerArray.join(" "));
//Congratulate the player
//alert(" Well done! The answer was " + randomWord);


//});




//This adds the dashes for the number of letters in  the curent randomword

//Display the dotted random word in the page
//answerArray = document.getElementById("current-word").innerHTML;

// while there are letters left to be guessed
///while (remainingLetters > 0) {
//show the player their progress
// alert(answerArray.join(" "));

//get a guess from the player
// var lettersGuessed = document.getElementById("guessed-letters").value;
//console.log(lettersGuessed);

//console.log(answerArray);



//Print letters guessed to page
//document.getElementById("current-word").innerHTML = answerArray.join(" ");
//console.log(lettersGuessed);



//}

//create a variable to hold the number of remainingLetters to be guessed
// var remainingLetters = word.length;
// document.getElementById("guessed-letter").value = lettersGuessed;
// console.log(lettersGuessed);



//if the guess is blank
// if (lettersGuessed == null) {
//exit the game loop
//  break;
//if the guess is more than one letter or no letters
/// } else if (guess.length !== 1) {
//alert the player to guess a single letter
//alert("Please enter a single letter only.");
//valid guess
//} else {
//update the game state with the guess
//for (var j = 0; j < randomWord.length; j++) {
//if the letter they guessed is in the word //at that point or index 
//if (randomWord[j] == guess) {
//update the answer array with the letter they guessed 
//at that point or index
// answerArray[j] = guess;
//subtract one from remaining letters 
// remainingLetters--;
// }
//}



// Clear all User input Elements
// var clearUserInput = document.getElementById("guessed-letter");
// clearUserInput.addEventListener("click", clearUserInput);

// while (remainingLetters > 0) 
//Print letters guessed to page

//lettersGuessed = document.getElementById("guessed-letter").value;
//console.log(lettersGuessed);
//word.push('lettersGuessed');
//console.log(word);

//Print letters guessed to page
//document.getElementById("guessed-letters").innerHTML = lettersGuessed;

//lettersGuessed.push(remainingLetters);
//console.log(remainingLetters);

//};

// Submit form with id function.
//function addLetter







//each time the player guesses a correct letter 
//current word shouldupdate 
//each time the player wins //each time the player loses <!DOCTYPE html>

//pick a random word from the words array

///var word = wordList[Math.floor(Math.random() * wordList.length)];

//sets up the answerArray to show how many letters there are
//using _'s
//alert(word);

//This adds the dashes for the number of letters of the picked word
// for (var i = 0; i < word.length; i++) {
//     word[i] = "_";
// }
// console.log(word);
// document.getElementById("demo").innerHTML = word;






//console.log(word);
//document.getElementById("demo").innerHTML = word;

// function shuffelWord(word) {
// var shuffledWord = '';
// word = word.split('');
// while (word.length > 0) {
// shuffledWord += word.splice(word.length * Math.random() << 0, 1); } return shuffledWord; }
//     document.querySelector('.word').innerHTML=shuffelWord('Batman');
// // var answerArray = [];






// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// var emptyString = "";
// var
//     alphabet = "abcdefghijklmnopqrstuvwxyz";
// var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
// var randomLetter = getRandomLetter;
// while (emptyString.length < 10) {
//     emptyString += randomLetter;
//     emptyString++;
// }
// console.log("Hello this:" + emptyString);