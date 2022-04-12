const fs = require('fs')
const { Client, Intents } = require('discord.js')

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
  ]
})

;(async() => {
  const eventsFiles = fs.readdirSync('./src/discord/events/')
  for (const eventFile of eventsFiles) {
    const event = require(`./discord/events/${eventFile}`)
    client.on(event.name, (...args) => event.execute(client, ...args))
  }
})()

module.exports = {
  client,
  start: () => {
    client.login(process.env.DISCORD_TOKEN)
    console.log('Starting Discord Client')
  }
}