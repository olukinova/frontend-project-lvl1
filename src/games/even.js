import playGame from '../index.js';
import getRandomNumber from './Math.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
const getGameData = () => {
  const number = getRandomNumber(2, 50);
  const isEven = (number % 2 === 0) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  const correctAnswer = () => String(isEven);
  return [question, correctAnswer()];
};

export default () => playGame(gameDescription, getGameData);
