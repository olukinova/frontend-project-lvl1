import playGame from '../index.js';
import getRandomNumber from '../../helpers/Math.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandomNumber(2, 50);
  const question = `Question: ${number}`;
  const correctAnswer = String(checkNumber(number) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, getGameData);
