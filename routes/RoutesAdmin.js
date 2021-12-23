//Importation 
const express = require('express');
var bodyParser = require('body-parser')
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//Importation du fichier controller
const Controller = require('../controllers/ControllerAdmin');
//création du routeur Express pour ce module
const routeur = express.Router();




routeur.get('/paneladmin', Controller.Panel_Admin);

//Exportation du module routeur
module.exports = routeur 