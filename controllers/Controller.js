//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
var db = require('../database');
//Importation du fichier models
var Model = require('../models/Model');


module.exports = {

    // Redirection vers l'accueil
    Accueil : (req, res) => {
            res.render("./accueil");
    },

    Panier : (req, res) => {
        res.render("./panier");
    },

}