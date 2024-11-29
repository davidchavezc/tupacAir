import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const GREET_COMMAND = {
  name: 'saludo',
  description: 'Manda un saludo!',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const LAVIN_COMMAND = {
  name: 'lavin',
  description: 'Expresa amor por Lavin',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const DAVID_COMMAND = {
  name: 'david',
  description: 'Expresa amor por David',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const FAVORITO_COMMAND = {
  name: 'favorito',
  description: 'Menciona tu fimeño favorito',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ZAID_COMMAND = {
  name: 'zaid',
  description: 'Expresa tus sentimientos sobre Zaid',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ASTRID_COMMAND = {
  name: 'astrid',
  description: 'Expresa tus sentimientos sobre Astrid',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [
  TEST_COMMAND,
  GREET_COMMAND,
  LAVIN_COMMAND,
  DAVID_COMMAND,
  FAVORITO_COMMAND,
  ZAID_COMMAND,
  ASTRID_COMMAND,
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
