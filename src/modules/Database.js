const mongoose = require("mongoose");

// schemas
const Channels = require('../models/Channels');

module.exports = {
  initialize: () => {
    console.log("Starting MongoDB connection...");
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("MongoDB connected");
      Channels.init();
    });
  },
};
