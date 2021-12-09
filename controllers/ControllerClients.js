
//Importation du fichier models
var Model = require('../models/ModelClients');


module.exports = {  

    // Redirection vers l'inscription
    Inscription : (req, res) => {
        res.render("./inscription");
    },

    Register : (req, res) => {
        let cli_nom = req.body.nom;
        let cli_prenom = req.body.prenom;
        let cli_mail = req.body.email;
        let cli_mdp = req.body.mdp;
        let cli_tel = req.body.tel;
        let cli_adresse = req.body.adresse;
        let cli_ville = req.body.ville;

        Model.Inscription(cli_nom, cli_prenom, cli_mail, cli_mdp, cli_tel, cli_adresse, cli_ville)
        res.render("./connexion")
    },

    Connexion : (req, res) => {
        res.render("./connexion");
    },

    Login : (req, res) => {
        let cli_mail = req.body.email;
        let cli_mdp = req.body.mdp;

        Model.Connexion(cli_mail, cli_mdp)
        res.render("./accueil")
    },
}