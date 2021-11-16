const mongoose = require("mongoose");

/* J'ai besoin de : 
  - un code correspondant à cette adresse
  - l'url original
  - l'url plus court*/

const URLSchema = new mongoose.Schema({
  urlCode: String,
  urlOriginal: String,
  urlShorter: String,
});

module.exports = mongoose.model("Url", URLSchema);
