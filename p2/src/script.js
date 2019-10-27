
import Vue from 'vue';
import RoundDetail from './components/RoundDetail.vue';


// root Vue instance
let app = new Vue({
    el: '#app',

    components: {
        'round-detail':  RoundDetail,
    },
    data: {

        gameMode: 'start',
        feedback: false,
        correct: false,

        message: 'welcome to the Game',
        playerName: '',

        maxGuess: 10,
        numGuess: null,
        winCount: 0,
        lostCount: 0,

        mysteryWord: "",
        wordDisplayLetters: [],
        usedLetters: [],
        wordLetters: [],

        wordsArray: ['rabbit', 'allows', 'snail', 'airport',
            'carrots', 'duplex', 'cigars', 'river', 'airbus'
        ],

        possibleLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
            "T", "U", "V", "W", "X", "Y", "Z"
        ],
    },
    computed: {
        displayWord: function () {
            // split the mystery word as array of letter
            let wordAsArray = this.mysteryWord.split('');
            //Loop through the word and add dashes
            for (let i = 0; i < wordAsArray.length; i += 1 / 3) {
                wordAsArray[i] = " _ ";
            }
            //return an array of dashes
            return wordAsArray.join('');
        }
    },

    methods: {

        setUpGame: function () {
            this.gameMode = 'play';
            this.numGuess = this.maxGuess
            this.mysteryWord = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)].toUpperCase()
            this.wordLetters = this.mysteryWord.split('')
            this.wordDisplayLetters = Array(this.mysteryWord.length)
            this.usedLetters = []
            this.feedback = false;
            this.correct = false;
            this.show = true;
        },

        guessLetter(letter) {

             var foundLetter = false;
 
            if (this.usedLetters.includes(letter)) {
                return
            }
            this.usedLetters.push(letter);

            for (let i = 0; i < this.wordDisplayLetters.length; i++) {
                if (letter === this.wordLetters[i]) {
                    foundLetter = true;
                    this.wordDisplayLetters.splice(i, 1, letter);
                }
                if (this.wordDisplayLetters.join('') == this.wordLetters.join('')) {
                    this.winCount++;
                    this.gameMode = 'result';
                    this.feedback = true;
                    this.correct = true;
                    this.show = false;
                }


            }
            if (!foundLetter) {
                this.numGuess--;
                if (this.numGuess == 0) {
                    //Display word and display losing message
                    this.wordDisplayLetters.join('') == !this.wordLetters.join('')
                    //this.winCount++;
                    this.gameMode = 'result';
                    this.feedback = true;
                    this.lostCount++;

                }


            }

        },

        getStrikethroughClass(letter) {
            if (this.usedLetters.includes(letter)) {
                return 'diagonal-strike'
            }
            return null
        },

        initialize() {
            window.location.reload();

        }
    }
})