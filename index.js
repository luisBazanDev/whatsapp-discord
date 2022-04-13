// DotEnv config
const dotenv = require("dotenv");
dotenv.config();

// Variables
const wwClient = require("./src/WhatsappClient");
const dsClient = require("./src/DiscordClient");

wwClient.start();
dsClient.start();
