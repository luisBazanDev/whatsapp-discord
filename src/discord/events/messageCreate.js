module.exports = {
  name: "messageCreate",
  execute: async (client, message) => {
    console.log(message.content)
  }
}