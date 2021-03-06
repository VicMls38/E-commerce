
//Importation du fichier models
var Model = require('../models/ModelAdmin');
var ModelProduits = require('../models/ModelProduits');
const jwt = require("jsonwebtoken")


module.exports = {  

    // Redirection vers l'inscription
    Panel_Admin : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
        res.render("./admin/panelAdmin", {token: token});
    },

    Ajouter_produit : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
        res.render("./admin/ajout_produit", {token: token});
    },

    Add_products : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);

        let nom = req.body.nom;
        let image = req.body.image;
        console.log(image);
        let description = req.body.description;
        let categorie = req.body.categorie;
        let prix = req.body.prix;

        Model.Add_product(nom, image, description, categorie, prix)
        ModelProduits.Affichage_produits(function(lignes){
            //if(lignes != 0){
            console.log(lignes);
        res.render("./produits/produits", {index : lignes, token: token});
           /* }else{
                res.render("./produits/produits");
            }*/
        });
    },
    
}