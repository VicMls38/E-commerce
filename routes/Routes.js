//Importation 
const express = require('express');

//Importation du fichier controller
const Controller = require('../controllers/Controller');

//création du routeur Express pour ce module
const routeur = express.Router();


routeur.get('/', Controller.Accueil);

routeur.get('/panier', Controller.Panier)


//Exportation du module routeur
module.exports = routeur 