import playGame from '../index.js';
import getRandomNumber from './Math.js';

const gameDescription = 'Find the greatest common divisor of given numbers';

const calculateResult = (randomNum1, randomNum2) => {
  if ((typeof randomNum1 !== 'number') || (typeof randomNum2 !== 'number')) {
    return false;
  }
  let num1 = Math.abs(randomNum1);
  let num2 = Math.abs(randomNum2);
  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const getGameData = () => {
  const randomNum1 = getRandomNumber(1, 10);
  const randomNum2 = getRandomNumber(1, 10);
  const question = (`Question: ${randomNum1} ${randomNum2}`);
  const correctAnswer = () => String(calculateResult(randomNum1, randomNum2));

  return [question, correctAnswer()];
};

export default () => playGame(gameDescription, getGameData);
