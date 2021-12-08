//Importation 
const express = require('express');
var bodyParser = require('body-parser')
var app = express()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//Importation du fichier controller
const Controller = require('../controllers/ControllerClients');
//création du routeur Express pour ce module
const routeur = express.Router();




routeur.get('/inscription', Controller.Inscription);
routeur.post('/register' ,urlencodedParser, Controller.Register);

routeur.get('/connexion', Controller.Connexion);


//Exportation du module routeur
module.exports = routeur 