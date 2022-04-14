const { Schema, model } = require("mongoose");

const Channels = new Schema({
  ds_channel_id: String,
  ww_channel_id: String,
  name: String,
  type: String,
  register_at: {
    type: Date,
    default: Date.now,
  },
  last_message_at: Date,
  ds_last_message_me_id: String,
  ww_last_message_me_id: String,
  ds_last_message_other_id: String,
  ww_last_message_other_id: String,
  ds_messages_traking: {
    type: Array,
    default: [],
  }
});

module.exports = model("Channels", Channels);