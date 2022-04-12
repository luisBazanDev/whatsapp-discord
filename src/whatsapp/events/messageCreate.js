module.exports= {
  name: 'message_create',
  execute: async(client, msg) => {
    console.log(msg.hasMedia)
    if(!msg.body.startsWith('!') && (msg._data.caption && !msg._data.caption.startsWith('!'))) return;
    const args = (msg._data.caption) ? msg._data.caption.split(' ') : msg.body.split(' ');
    const command = args.shift().slice(1);
    const cmd = client.commands.get(command);
    if(!cmd) return;
    cmd.run(client, msg, args);
  }
}