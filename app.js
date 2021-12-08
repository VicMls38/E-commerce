//Importation du module express
var express = require('express');
//Importation du fichier de routage
const Routeur = require('./routes/Routes')
const RouteurClients = require('./routes/RoutesClients')

//Déclaration, paramètrage et utilisation de l'app
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))
app.use('/', Routeur, RouteurClients);
app.use(express.static(__dirname + '/img'));

//Définition du port d'écoute
app.listen(3000, function () {
  console.log("Application d'exemple écoutant sur le port 3000 !");
});