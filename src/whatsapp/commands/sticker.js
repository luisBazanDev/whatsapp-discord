const Util = require('whatsapp-web.js/src/util/Util');
module.exports = {
  name: 'sticker',
  aliases: ['make-sticker'],
  permissions: [],
  description: 'Make a sticker with img',
  run: async(client, msg) => {
    if(!msg.hasMedia) {
      return msg.reply('Please send a image')
    }
    const media = await msg.downloadMedia();
    const sticker = await Util.formatImageToWebpSticker(media, client.pupPage);
    msg.reply(sticker, {
      sendMediaAsSticker: true
    })
  }
}