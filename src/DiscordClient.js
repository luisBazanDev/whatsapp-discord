const fs = require("fs");
const { Client, Intents } = require("discord.js");
const config = require("../config.json");

const intents = config.discord.intents.map(intent => {
  return Intents.FLAGS[intent];
})

const client = new Client({
  intents,
});

client.config = config;

client.commands = {
  slash: new Map(),
  text: new Map(),
};

(async () => {
  const eventsFiles = fs.readdirSync("./src/discord/events/");
  for (const eventFile of eventsFiles) {
    const event = require(`./discord/events/${eventFile}`);
    client.on(event.name, (...args) => event.execute(client, ...args));
  }

  const categories = fs.readdirSync("./src/discord/commands/");
  categories.map((category) => {
    const commands = fs.readdirSync(`./src/discord/commands/${category}`);
    commands.map((command) => {
      const cmd = require(`./discord/commands/${category}/${command}`);
      client.commands[category].set(cmd.name, cmd);
      if (!command.aliases) return;
      command.aliases.map((alias) => {
        client.commands[category].set(alias, cmd);
      });
    });
  });
})();

module.exports = {
  client,
  start: () => {
    console.log("Starting Discord Client...");
    client.login(process.env.DISCORD_TOKEN);
  },
  sendMessage: async({
    channel,
    message,
    img,
    embed,
    file,
  }) => {
    
  },
};