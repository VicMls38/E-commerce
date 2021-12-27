
//Importation du fichier models
var Model = require('../models/ModelProduits');
const jwt = require("jsonwebtoken")


module.exports = {  

    // Redirection vers l'inscription
    Page_Produits : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
        Model.Affichage_produits(function(lignes){
            //if(lignes != 0){
            console.log(lignes);
        res.render("./produits/produits", {index : lignes, token: token});
           /* }else{
                res.render("./produits/produits");
            }*/
        });
    },

    
}