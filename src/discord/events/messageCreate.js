module.exports = {
  name: "messageCreate",
  execute: async (client, message) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    if (!message.content.startsWith("!")) return;
    const args = message.content.slice(1).split(" ");
    const command = args.shift().toLowerCase();
    const cmd =
      client.commands.text.get(command) ||
      client.commands.text.get(client.aliases.get(command));
    if (!cmd) return;
    // midlewares
    cmd.run(client, message, args);
  },
};
