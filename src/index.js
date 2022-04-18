import readlineSync from 'readline-sync';

let userName = '';
const numberOfRounds = 3;

export const greeting = () => {
	console.log('Welcome to the Brain Games!');
	userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!\n`);
};

export const getUserAnswer = () => {
        return String(readlineSync.question('Your answer: '));
}

export const checkResult = (correctAnswer) => {
	//correctAnswer
	//userAnswer
	let count = 0;
	const userAnswer = getUserAnswer()

	if (userAnswer === correctAnswer) {
		console.log('Correct!');
		count += 1;
		return true;
	} else {
		console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
		console.log(`Let's try again, ${userName}!`);
		return false;
	}
	if (count === 3) {
		console.log(`Congratulations, ${userName}!`);
		};
};

export const playGame = (gameDescription, gameData) => {


	//ask question
	greeting()
	console.log(gameDescription)
	for (let i = 0; i < numberOfRounds; i += 1) {
		//gameGata is a FUNCTION which returns array with 2 elements each time it is called
		//1st element is generated question
		//2nd element is calculated 'expected' answer
		//so we are calling our gameData() function to get new values
		let calculatedGameData = gameData();
		let question = calculatedGameData[0];
		let expectedAnswer = calculatedGameData[1];
		// or if you'll read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
		// you can do it like so instead of calculatedGameData[0] and calculatedGameData[1] above:
		// [question, expectedAnswer] = gameData()
		console.log(`Question: ${question}`);
		let result = checkResult(expectedAnswer);
		// if result is false exit loop
		if (!result)
		   break;
	}
};
