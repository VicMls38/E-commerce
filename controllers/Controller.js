//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var db = require('../database');
//Importation du fichier models
var Model = require('../models/Model');
const jwt = require("jsonwebtoken")


module.exports = {

    // Redirection vers l'accueil
    Accueil : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
        res.render("./accueil", {token: token});  
    },

    Infos : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
        res.render("./infos", {token: token});
},

}