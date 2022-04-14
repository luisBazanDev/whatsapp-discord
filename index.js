// DotEnv config
const dotenv = require("dotenv");
dotenv.config();

// Variables
const wwClient = require("./src/WhatsappClient");
const dsClient = require("./src/DiscordClient");
const CrossManager = require("./src/CrossManager");
const Database = require("./src/modules/Database");

Database.initialize();

wwClient.start();
dsClient.start();

CrossManager.initialize(wwClient, dsClient);
