module.exports = {
  name: "ping",
  aliases: ["status"],
  category: "text",
  description: "Pong!",
  midlewares: [],
  run: async (client, message, args) => {
    message.reply(`Pong! with ${client.ws.ping}ms`);
  },
};
