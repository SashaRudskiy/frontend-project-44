#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

import task from '../src/calc.js';

const description = 'What is the result of the expression?';
gameBody(description, task);
