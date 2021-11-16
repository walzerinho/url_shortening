// Cette route sert à obtenir un URL raccourci depuis l'URL original
const express = require("express");
const validUrl = require("valid-url");
const shortId = require("short-id");

const router = express.Router();

const Url = require("../models/Url");
const baseUrl = "http://localhost:5000";

router.post("/shorten", async (req, res) => {
  const { urlOriginal } = req.body;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("URL Invalide");
  }
  const urlCode = shortId.generate();

  // check si l'url saisie est valide
  if (validUrl.isUri(urlOriginal)) {
    try {
      let url = await Url.findOne({
        urlOriginal,
      });
      if (url) {
        res.json(url);
      } else {
        // on créé la nouvelle adresse
        const urlShorter = baseUrl + "/" + urlCode;
        // sauvegarde dans la DB en suivant le schéma
        url = new Url({
          urlOriginal,
          urlShorter,
          urlCode,
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(401).json("URL invalide");
  }
});

module.exports = router;
