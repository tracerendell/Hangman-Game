// Variable containing all letters
	var letters = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z',' '];

// Word bank for possible word choices
	var wordBank = ['predator', 'terminator', 'robocop', 'demolition man', 'total recall', 'die hard', 'lethal weapon', 'jurassic park', 'bloodsport'];

// Holds chosen word
	var chosenWord = "";

//  Holds letters in word
	var lettersInWord = [];

// Holds number of blanks in word
	var numBlanks = 0;

// Holds combination of blanks and successful guesses
	var blanksAndSuccess = [];

// holds incorrect guesses
	var wrongLetters = [];

// Counters
	var winCount = 0;
	var loseCount = 0;
	var guessesLeft = 6;
	var rightGuessCounter = 0;

//--------------------------------------------------

//Reset function to start the game
	function reset() {
		//choose word from word bank
		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		//splits the randomly chosen word into individual letters
		lettersInWord = chosenWord.split('');
		//returns how many blanks you will need to represent your word
		numBlanks = lettersInWord.length;

		//-----------------------------------------------

		lettersGuessed = 0;
		rightGuessCounter = 0;
		guessesLeft = 6;
		wrongLetters = [];
		blanksAndSuccess = [];
		letters = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z',' '];
		test=false;
		startGame();
	}
	function startGame() {

		//Chooses random word from wordBank
		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		//splits the randomly chosen word into individual letters
		lettersInWord = chosenWord.split('');
		//returns how many blanks you will need to represent your word
		numBlanks = lettersInWord.length;

		//--------------------------------------------------

		rightGuessCounter = 0;
		guessesLeft = 6;
		wrongLetters =[];
		blanksAndSuccess =[];
		letters = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z',' '];

		//Populate blanks
		for (var i = 0; i< numBlanks; i++) {

			blanksAndSuccess.push('_');
			document.getElementById('wordToGuess').innerHTML = blanksAndSuccess;
		}

		//updating the HTML
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccess.join(' ');
		document.getElementById('numGuesses').innerHTML = guessesLeft;
		document.getElementById('winCounter').innerHTML = winCount;
		document.getElementById('lossCounter').innerHTML = loseCount;
		document.getElementById('wrongGuesses').innerHTML = wrongLetters;
		//for testing and debugging
		console.log(chosenWord);
		console.log(lettersInWord);
		console.log(numBlanks);
		console.log(blanksAndSuccess);
	}

	function compareLetters(userKey) {

		console.log('WORKING!');
		//if user key selection exists in the random selected word then run function
		if(chosenWord.indexOf(userKey) > -1) {

			//loop depending on the amount of blanks
			for(var i = 0; i < numBlanks; i++) {

				//fills in the correct index with user key
				if(lettersInWord[i] === userKey) {

					rightGuessCounter++;
					blanksAndSuccess[i] = userKey;
					document.getElementById('wordToGuess').innerHTML = blanksAndSuccess.join(' ');

				}
			}

			//test debug
			console.log(blanksAndSuccess);
		}
		//Wrong Keys
		else {
			wrongLetters.push(userKey);
			guessesLeft--;
			//update HTML
			document.getElementById('numGuesses').innerHTML = guessesLeft;
			document.getElementById('wrongGuesses').innerHTML = wrongLetters;
			//test debug
			console.log('Incorrect Letters are: ' + wrongLetters);
			console.log('You have ' + guessesLeft + ' guesses left')
		}
	}
	function winLose() {

		//if blanks filled in with the right letters, you win
		if(rightGuessCounter === numBlanks) {

			//count wins
			winCount++;
			//HTML update
			document.getElementById('winCounter').innerHTML = winCount;
			alert('winner winner');
			reset();
		}

		//when no more guesses are left you lose
		else if(guessesLeft === 0) {

			//counts losses
			loseCount++;
			//updates html
			document.getElementById('lossCounter').innerHTML = loseCount;
			alert('Loser');
			reset();
		}
	}

	//main process
	//--------------------------------------------
	//initiates code
	startGame();

	document.onkeyup = function(event) {

		test = true;
		var lettersGuessed = event.key;
		for(var i = 0; i < letters.length; i++) {
			if(lettersGuessed === letters[i] && test === true) {
				var splicedWord = letters.splice(i,1);
				//test debug
				console.log('letters is = ' + letters[i]);
				console.log('spliced word is = ' + splicedWord);

				compareLetters(lettersGuessed);
				winLose();
			}

		}
	}







