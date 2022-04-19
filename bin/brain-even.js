#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello,  ${userName}!`);
const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const isEven = (number) => number % 2 === 0;

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const startRound = () => {
  const number = generateRandomNumber(0, 10);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your Answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
  return false;
};

const startGame = () => {
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const result = startRound();
    if (result === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
startGame();
