//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
var db = require('../database');
//Importation du fichier models
var Model = require('../models/ModelClients');


module.exports = {

    // Redirection vers l'inscription
    Inscription : (req, res) => {
        res.render("./inscription");
    },

    Connexion : (req, res) => {
        res.render("./connexion");
    },
}