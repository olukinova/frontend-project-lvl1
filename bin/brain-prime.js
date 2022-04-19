#!/usr/bin/env node
import * as generalFunctions from "../src/index.js";

const getRandomNumber = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const checkNumber = (num) => {
    let flag = "yes";
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = "no";
		break; 
	}
}
return flag;
}



const getGameData = () => {
    const number = getRandomNumber(2, 50);
    const question = `Question: ${number}`;
    const correctAnswer = () => String(checkNumber(number));
    return [question, correctAnswer()];
};

generalFunctions.playGame(gameDescription, getGameData);