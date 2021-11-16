// Cette route sert à obtenir l'URL original depuis l'URL raccourcie

const express = require("express");
const router = express.Router();
const Url = require("../models/Url");

// On get avec le code donné en DB
router.get("/:code", async (req, res) => {
  try {
    // check si un doc existe avec ce code
    const url = await Url.findOne({
      urlCode: req.params.code,
    });
    if (url) {
      // redirection sur l'adresse initiale il existe déjà
      return res.redirect(url.urlOriginal);
    } else {
      return res.status(404).json("Aucune URL trouvée");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Erreur serveur");
  }
});

module.exports = router;
