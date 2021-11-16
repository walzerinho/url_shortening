const express = require("express");
const app = express();

// Database config
const connection = require("./config/db.config");
connection.once("open", () => console.log("Connexion à la DB réussie"));
connection.on("error", () => console.log("Error"));

// Routes Config
app.use(
  express.json({
    extended: false,
  })
);
// Route get
app.use("/", require("./routes/redirect"));
// Route post
app.use("/url", require("./routes/url"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`serveur lancé sur le port ${PORT}`));
