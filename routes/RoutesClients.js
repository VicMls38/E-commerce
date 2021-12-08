//Importation 
const { urlencoded } = require('express');
const express = require('express');
var urlencodedParser = express.urlencoded({ extended: false })
//Importation du fichier controller
const Controller = require('../controllers/ControllerClients');
//création du routeur Express pour ce module
const routeur = express.Router();


routeur.get('/inscription', Controller.Inscription);

routeur.get('/connexion', Controller.Connexion);


//Exportation du module routeur
module.exports = routeur 