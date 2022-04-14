const { Schema, model } = require("mongoose");

const Channels = new Schema({
  name: String,
  type: String, // Group or Direct
  ds: {
    id: String,
    last_message_me: String,
    last_message_other: String,
    messages_traking: [
      {
        id: String,
        text: String,
        created_at: Date,
      }
    ]
  },
  ww: {
    id: String,
    last_message_me: String,
    last_message_other: String,
  },
  last_message_at: Date,
  register_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Channels", Channels);