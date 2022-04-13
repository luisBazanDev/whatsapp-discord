module.exports = {
  name: 'sticker',
  aliases: ['make-sticker'],
  permissions: [],
  description: 'Make a sticker with img',
  run: async(client, msg, args) => {
    if(!msg.hasMedia) {
      return msg.reply('Please send a image')
    }
    const media = await msg.downloadMedia();
    msg.reply(media, null, {
      sendMediaAsSticker: true,
      stickerName: args.length > 0 ? args.join(" ") : 'sticker',
      stickerAuthor: '@Luis Bazán 👨‍💻'
    })
  }
}