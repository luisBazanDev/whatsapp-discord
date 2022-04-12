module.exports = {
  name: "ready",
  execute: async (client) => {
    console.log(`Discord Client ready as ${client.user.tag}`);
  },
};
