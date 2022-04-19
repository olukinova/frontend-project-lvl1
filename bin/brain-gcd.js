#!/usr/bin/env node

import * as generalFunctions from '../src/index.js';

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const gameDescription = 'Find the greatest common divisor of given numbers';

const calculateResult = (randomNum1, randomNum2) => {

  if ((typeof randomNum1 !== 'number') || (typeof randomNum2 !== 'number')) {
    return false; 
  }
  randomNum1 = Math.abs(randomNum1);
  randomNum2 = Math.abs(randomNum2);
  while (randomNum2) {
    let temp = randomNum2;
    randomNum2 = randomNum1 % randomNum2;
    randomNum1 = temp;
  }
  return randomNum1;
};


console.log(calculateResult(10, 4));

const getGameData = () => {

	const randomNum1 = getRandomNumber(0, 100);
	const randomNum2 = getRandomNumber(0, 100);
	const question = (`${randomNum1} ${randomNum2}`);
	const correctAnswer = () => String(calculateResult(randomNum1, randomNum2));
    //using array here because we don't know this 
	return [question, correctAnswer()]

};

generalFunctions.playGame(gameDescription, getGameData);
