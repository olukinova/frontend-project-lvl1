import readlineSync from 'readline-sync';

let userName = '';
const numberOfRounds = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const getUserAnswer = () => String(readlineSync.question('Your answer: '));

let count = 0;
export const checkResult = (correctAnswer) => {
  const userAnswer = getUserAnswer();
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    count += 1;
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const playGame = (gameDescription, gameData) => {
  greeting();
  console.log(gameDescription);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const calculatedGameData = gameData();
    const question = calculatedGameData[0];
    const expectedAnswer = calculatedGameData[1];
    console.log(`Question: ${question}`);
    const result = checkResult(expectedAnswer);
    if (!result) {
      break;
    }
  }
  if (count === 3) {
    console.log(`'Congratulations, ${userName}!'`);
  }
};
