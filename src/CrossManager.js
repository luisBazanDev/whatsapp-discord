var dsClient;
var wwClient;
const Channels = require('./models/Channels');

const resolveChannelWithWhatsapp = async (number_id) => {
  const channel = await Channels.findOne({
    number_id,
  });
  if(channel) return channel;
  else return null;
}

const registerChannelWithWhatsapp = async ({
  number_id,
  name,
  type,
}) => {
  let channel = await resolveChannelWithWhatsapp(number_id)
  if(channel) return channel;
  channel = new Channels({
    number_id,
    name,
    type,
  });
  await channel.save();
  return channel;
}

const sendWhatsappMessage = (message, chat) => {
  wwClient.client.sendMessage(chat, message);
}

module.exports = {
  initialize: (ww, ds) => {
    wwClient = ww;
    dsClient = ds;
  },
  parseMedia: async() => {
    
  },
  sendWhatsappMessage,
  registerChannelWithWhatsapp,
}