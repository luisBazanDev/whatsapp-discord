const { ChatTypes, MessageMedia } = require('whatsapp-web.js')
const fs = require('fs')

/**
 * 
 * @param {Chat} chat 
 * @returns
 */
const resolveChannelType = (chat) => {
  if(chat.isGroup) {
    return "group";
  } else if(chat.isReadOnly) {
    return "readonly";
  }
  return "private";
}

/**
 * 
 * @param {String} path Path of the project root
 * @returns MessageMedia
 */
const getLocalImage = (path) => {
  const file = fs.readFileSync(path, 'base64');
  return new MessageMedia(file, 'image/png');
}

/**
 * 
 * @param {String} path Path of the project root
 * @returns MessageMedia
 */
const getLocalVideo = (path) => {
  const file = fs.readFileSync(path, 'base64');
  return new MessageMedia(file, 'video/mp4');
}