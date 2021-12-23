
//Importation du fichier models
var Model = require('../models/ModelClients');
const jwt = require("jsonwebtoken")


module.exports = {  

    // Redirection vers l'inscription
    Panel_Admin : (req, res) => {
        res.render("./panelAdmin");
    },

    
}