const { MessageEmbed } = require('discord.js');
module.exports = {
  parseEmbed: ({
    title,
    desciption,
    fields,
    img,
    thumbnail,
    color,
    timestamp,
  }) => {
    const embed = new MessageEmbed()
    if(title) embed.setTitle(title)
    if(desciption) embed.setDescription(desciption)
    if(fields) embed.addFields(fields)
    if(img) embed.setImage(img)
    if(thumbnail) embed.setThumbnail(thumbnail)
    if(color) embed.setColor(color)
    if(timestamp) embed.setTimestamp()
    return embed
  }
}