import playGame from '../index.js';
import getRandomNumber from '../../helpers/Math.js';

const operand = ['+', '-', '*'];

const calculateResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const gameDescription = 'What is the result of the expression?';

const getGameData = () => {
  const randomOperator = operand[getRandomNumber(0, operand.length - 1)];
  const randomNum1 = getRandomNumber(0, 10);
  const randomNum2 = getRandomNumber(0, 10);
  const question = `Question: ${randomNum1} ${randomOperator} ${randomNum2}`;
  const correctAnswer = () => String(calculateResult(randomNum1, randomNum2, randomOperator));
  return [question, correctAnswer()];
};

export default () => playGame(gameDescription, getGameData);
