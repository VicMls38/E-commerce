
//Importation du fichier models
var Model = require('../models/ModelAdmin');
var ModelProduits = require('../models/ModelProduits');
const jwt = require("jsonwebtoken")


module.exports = {  

    // Redirection vers l'inscription
    Panel_Admin : (req, res) => {
        res.render("./admin/panelAdmin");
    },

    Ajouter_produit : (req, res) => {
        res.render("./admin/ajout_produit");
    },

    Add_products : (req, res) => {

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
        res.render("./produits/produits", {index : lignes});
           /* }else{
                res.render("./produits/produits");
            }*/
        });
    },
    
}