module.exports = {
  name: "interactionCreate",
  execute: async (client, interaction) => {
    if (!interaction.isCommand()) return;
    const { commandName, options, member } = interaction;
    if(!member.permissions.has("ADMINISTRATOR")) return;
    const command = client.commands.slash.get(commandName);
    if (!command) return;
    // midlewares
    command.run(client, interaction, options._hoistedOptions);
  },
};
