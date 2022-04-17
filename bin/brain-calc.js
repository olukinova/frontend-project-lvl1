#!/usr/bin/env node
import * as generalFunctions from "../src/index.js";

const operand = ['+', '-', '*'];

const getRandomNumber = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

const gameDescription = 'What is the result of the expression?'

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

const getGameData = () => {
	const randomOperator = operand[getRandomNumber(0, operand.length - 1)];
	let randomNum1 = getRandomNumber(0, 100);
	let randomNum2 = getRandomNumber(0, 100);
	
	const question = `${randomNum1}${randomOperator}${randomNum2}`;
	const correctAnswer = () => String(calculateResult(randomNum1, randomNum2, randomOperator));
    //using array here because we don't know this 
	return [question, correctAnswer()]

}


generalFunctions.playGame(gameDescription, getGameData);




