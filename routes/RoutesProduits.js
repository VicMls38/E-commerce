//Importation 
const express = require('express');

//Importation du fichier controller
const Controller = require('../controllers/ControllerProduits');

//création du routeur Express pour ce module
const routeur = express.Router();


routeur.get('/produits/', Controller.Page_Produits);





//Exportation du module routeur
module.exports = routeur 