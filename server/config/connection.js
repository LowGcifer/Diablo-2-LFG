const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/diablo2lfg", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useDcreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
