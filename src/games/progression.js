import playGame from '../index.js';
import getRandomNumber from '../../helpers/Math.js';

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const progressionStart = getRandomNumber(0, 10);
  const progressionStep = getRandomNumber(2, 10);
  const progressionLength = 10;
  const hiddenItemIndex = Math.round(Math.random() * (progressionLength - 1));

  const buildProgression = (begin, step, length) => {
    const result = [];
    for (let i = 0; i < length; i += 1) {
      result.push(begin + step * i);
    }
    return result;
  };

  const progression = buildProgression(progressionStart, progressionStep, progressionLength);
  const correctAnswer = String(progression[hiddenItemIndex]);
  progression[hiddenItemIndex] = '..';
  const progToString = progression.join(' ');
  const question = `Question: ${progToString}`;
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, getGameData);
