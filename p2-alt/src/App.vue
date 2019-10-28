<template>
	<div id="app" v-cloak class="container">
		<h1>Mystery Word Game(p2-alt)</h1>
		<HelloWorld msg="Single File Components: Comprehensive Approach" />

		<div v-if="gameMode =='start'" id="landingDiv">
			<p>Enter your Name and Press the start button to get started!</p>
			<label>What is your Name</label>
			<input id="input" type="test" v-model.lazy.trim="playerName" @keyup.enter="setUpGame" />
			<button id="startBtn" class="startBtn btn-lg btn-primary" v-on:click="setUpGame">Start</button>
		</div>

		<div v-else-if="gameMode =='play'" id="content">
			<p v-if=" playerName">Welcome to the game {{ playerName }} !</p>
			<h4>Mystery Word</h4>
			<p class="currentWord">{{ displayWord }}</p>

			<h4>Letters Guessed</h4>
			<p class="letter" v-for="letter in wordDisplayLetters" :key="guess-letter">{{letter}}</p>
			<h4>Guesses Remaining</h4>

			<p class="guessesCount">{{ numGuess }}</p>
			<p
				@click="guessLetter(letter)"
				class="possibleLetter"
				:class="getStrikethroughClass(letter)"
				v-for="letter in possibleLetters"
				:key="letter"
			>{{letter}}</p>
			<br />
			<br />
		</div>

		<div v-else>
			<round-detail :winner="playerName" :win="winCount" :lost="lostCount"></round-detail>

			<div v-if="feedback" class="feedback" v-bind:class="{ pass : correct, fail: !correct }">
				<div v-if="correct">
					You won! Nice work.
					<button @click="setUpGame()">Play again</button>
					<br />Or restart game
					<button @click="initialize()">Re-start</button>
				</div>
				<div v-else>
					You lost. Please try again.
					<button @click="setUpGame()">
						Play
						again
					</button>
					<br />Or restart game
					<button @click="initialize()">Re-start</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import RoundDetail from "./components/RoundDetail.vue";

export default {
	name: "app",

	data: function() {
		return {
			gameMode: "start",
			feedback: false,
			correct: false,
			message: "welcome to the Game",
			playerName: "",

			maxGuess: 10,
			numGuess: null,
			winCount: 0,
			lostCount: 0,

			mysteryWord: "",
			wordDisplayLetters: [],
			usedLetters: [],
			wordLetters: [],

			wordsArray: [
				"rabbit",
				"allows",
				"snail",
				"airport",
				"carrots",
				"duplex",
				"cigars",
				"river",
				"airbus"
			],

			possibleLetters: [
				"A",
				"B",
				"C",
				"D",
				"E",
				"F",
				"G",
				"H",
				"I",
				"J",
				"K",
				"L",
				"M",
				"N",
				"O",
				"P",
				"Q",
				"R",
				"S",
				"T",
				"U",
				"V",
				"W",
				"X",
				"Y",
				"Z"
			]
		};
	},
	components: {
		HelloWorld,
		RoundDetail
	},

	methods: {
		setUpGame: function() {
			this.gameMode = "play";
			this.numGuess = this.maxGuess;
			this.mysteryWord = this.wordsArray[
				Math.floor(Math.random() * this.wordsArray.length)
			].toUpperCase();
			this.wordLetters = this.mysteryWord.split("");
			this.wordDisplayLetters = Array(this.mysteryWord.length);
			this.usedLetters = [];
			this.feedback = false;
			this.correct = false;
			this.show = true;
		},

		guessLetter: function(letter) {
			var foundLetter = false;

			if (this.usedLetters.includes(letter)) {
				return;
			}
			this.usedLetters.push(letter);

			for (let i = 0; i < this.wordDisplayLetters.length; i++) {
				if (letter === this.wordLetters[i]) {
					foundLetter = true;
					this.wordDisplayLetters.splice(i, 1, letter);
				}
				if (this.wordDisplayLetters.join("") == this.wordLetters.join("")) {
					this.winCount++;
					this.gameMode = "result";
					this.feedback = true;
					this.correct = true;
					this.show = false;
				}
			}
			if (!foundLetter) {
				this.numGuess--;
				if (this.numGuess == 0) {
					//Display word and display losing message
					this.wordDisplayLetters.join("") == !this.wordLetters.join("");
					//this.winCount++;
					this.gameMode = "result";
					this.feedback = true;
					this.lostCount++;
				}
			}
		},

		getStrikethroughClass: function(letter) {
			if (this.usedLetters.includes(letter)) {
				return "diagonal-strike";
			}
			return null;
		},

		initialize: function() {
			window.location.reload();
		}
	},

	computed: {
		displayWord: function() {
			// split the mystery word as array of letter
			let wordAsArray = this.mysteryWord.split("");
			//Loop through the word and add dashes
			for (let i = 0; i < wordAsArray.length; i += 1 / 3) {
				wordAsArray[i] = " _ ";
			}
			//return an array of dashes
			return wordAsArray.join("");
		}
	}
};
</script>

<style>
</style>
