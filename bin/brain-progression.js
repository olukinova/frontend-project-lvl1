#!/usr/bin/env node
import * as generalFunctions from '../src/index.js';

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const progBeginNumber = Math.round(Math.random() * (100 - 1) + 1);
  const progStepNumber = Math.round(Math.random() * (10 - 2) + 2);
  const progLengthNumber = 10;
  const hiddenItemIndex = Math.round(Math.random() * (progLengthNumber - 1));

  const buildProgression = (progBeginNumber, progStepNumber, progLengthNumber) => {
    const result = [];
    for (let i = 0; i < progLengthNumber; i += 1) {
		  result.push(progBeginNumber + progStepNumber * i);
    }
    return result;
  };

  const progression = buildProgression(progBeginNumber, progStepNumber, progLengthNumber);
  const correctAnswer = String(progression[hiddenItemIndex]);
  progression[hiddenItemIndex] = '..';
  const progToString = progression.join(' ');
  const question = `Question: ${progToString}`;
  //using array here because we don't know this
  return [question, correctAnswer];
};

generalFunctions.playGame(gameDescription, getGameData);
