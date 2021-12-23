
//Importation du fichier models
var Model = require('../models/ModelProduits');
const jwt = require("jsonwebtoken")


module.exports = {  

    // Redirection vers l'inscription
    Page_Produits : (req, res) => {
        res.render("./produits/produits");
    },

    
}