//Importation 
const express = require('express');
var bodyParser = require('body-parser')
const middleware = require('../middleware')
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//Importation du fichier controller
const Controller = require('../controllers/ControllerClients');
//création du routeur Express pour ce module
const routeur = express.Router();


routeur.get('/panier', middleware.AuthenticateToken, Controller.Panier)

routeur.get('/inscription', Controller.Inscription);
routeur.post('/register' ,urlencodedParser, Controller.Register);

routeur.get('/connexion', Controller.Connexion);
routeur.post('/login' ,urlencodedParser, Controller.Login);


//Exportation du module routeur
module.exports = routeur 