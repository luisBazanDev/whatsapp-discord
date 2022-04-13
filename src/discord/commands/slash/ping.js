const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "🪄 Command for test speed from the bot to discord.",
  permissions: [],
  run: async (client, interaction, options) => {
    const embed = new MessageEmbed()
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#00aeef")
      .addField("ping", `${client.ws.ping}ms`);
    interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};