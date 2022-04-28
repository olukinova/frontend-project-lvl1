import playGame from '../index.js';
import getRandomNumber from './Math.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkNumber = (num) => {
  let flag = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = 'no';
      break;
    }
  }
  return flag;
};

const getGameData = () => {
  const number = getRandomNumber(2, 50);
  const question = `Question: ${number}`;
  const correctAnswer = () => String(checkNumber(number));
  return [question, correctAnswer()];
};

export default () => playGame(gameDescription, getGameData);
