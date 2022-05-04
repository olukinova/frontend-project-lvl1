import readlineSync from 'readline-sync';

export default (gameDescription, gameData) => {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const getUserAnswer = () => String(readlineSync.question('Your answer: '));
  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const calculatedGameData = gameData();
    const question = calculatedGameData[0];
    const expectedAnswer = calculatedGameData[1];
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
