
//Importation du fichier models
var Model = require('../models/ModelProduits');
const jwt = require("jsonwebtoken")


module.exports = {  

    // Redirection vers l'inscription
    Page_Produits : (req, res) => {
        Model.Affichage_produits(function(lignes){
            //if(lignes != 0){
            console.log(lignes);
        res.render("./produits/produits", {index : lignes});
           /* }else{
                res.render("./produits/produits");
            }*/
        });
    },

    
}