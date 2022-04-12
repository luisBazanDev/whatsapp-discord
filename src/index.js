const { Client } = require("whatsapp-web.js");
var qrcode = require('qrcode-terminal');

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, {
    small: true
  });
});

client.on("ready", () => {
  console.log("Client is ready");
});

client.on("message", async (msg) => {
  console.log(msg);
});

client.initialize();
