import {
    startGame,
    informationOutput,
    showGameOutput
} from './View.js';

import {
    btnNextInfo,
    btnnNxtShowGame,
    btnCheckNumber,
    btnReplayGame,
    checkNumber
} from "./Model.js";


startGame();

btnNextInfo.addEventListener("click", informationOutput);
btnnNxtShowGame.addEventListener("click", showGameOutput);
btnCheckNumber.addEventListener("click", checkNumber);
btnReplayGame.addEventListener("click", showGameOutput);