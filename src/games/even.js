import playGame from '../index.js';
import getRandomNumber from '../../helpers/Math.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
const getGameData = () => {
  const number = getRandomNumber(2, 50);
  const isEven = (number % 2 === 0);
  const question = `Question: ${number}`;
  const correctAnswer = String(isEven ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, getGameData);
