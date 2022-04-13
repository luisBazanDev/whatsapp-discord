module.exports = {
  name: "ready",
  execute: async (client) => {
    const guild = await client.guilds.resolve(client.config.discord.guild_id)
    const commands = guild.commands;
    client.commands.slash.forEach(cmd => {
      commands.create({
        name: cmd.name,
        description: cmd.description || "No description",
        options: cmd.options || [],
      });
    });
    console.log(`Discord Client ready as ${client.user.tag}`);
  },
};
