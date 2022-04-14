const { ChatTypes } = require('whatsapp-web.js')
const formatChannel = (channel) => {
  const resp = {
    id: channel.id,
    type: undefined,
    name: undefined,
  }
  if(channel.isGroup) {
    return `${channel.title} (${channel.id})`;
  }
}