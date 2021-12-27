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
        console.log(token)
        res.render("./accueil", {index: token});  
    },

    Infos : (req, res) => {
        res.render("./infos");
},

}