const fs = require("fs");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
  ffmpegPath: __dirname + '/../resorces/software/ffmpeg.exe',
});

(async () => {
  const eventsFiles = fs
    .readdirSync("./src/whatsapp/events/")
    .filter((e) => e.endsWith(".js"));
  for (const file of eventsFiles) {
    const event = require(`./whatsapp/events/${file}`);
    client.on(event.name, (...args) => event.execute(client, ...args));
  }

  client.commands = new Map();
  const commandsFiles = fs
    .readdirSync("./src/whatsapp/commands/")
    .filter((e) => e.endsWith(".js"));
  for (const file of commandsFiles) {
    const command = require(`./whatsapp/commands/${file}`);
    client.commands.set(command.name, command);
    command.aliases.forEach((alias) => client.commands.set(alias, command.name));
  }
})();

module.exports = {
  client,
  start: () => {
    console.log("Starting Whatsapp Client...");
    client.initialize();
  },
};
