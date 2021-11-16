const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://cefim:cefim@cluster0.vrx5w.mongodb.net/todolist?retryWrites=true&w=majority";

// Connexion à la DB

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

module.exports = connection;
