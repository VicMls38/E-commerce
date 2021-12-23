
//Importation du fichier models
var Model = require('../models/ModelClients');
const jwt = require("jsonwebtoken")


module.exports = {  

    Panier : (req, res) => {
        res.render("./users/panier");
    },

    // Redirection vers l'inscription
    Inscription : (req, res) => {
        res.render("./users/inscription");
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
        res.render("./users/connexion")
    },

    Connexion : (req, res) => {
        res.render("./users/connexion");
    },

    // Fonction de connexion avec where //
    Login : (req, res) => {
        let cli_mail = req.body.email;
        let cli_mdp = req.body.mdp;
       
        
        
       Model.Connexion(function(lignes){
            console.log(lignes);
            if(lignes != 0){
                console.log(cli_mail)

                const token = jwt.sign(
                    {Cli_Mail: cli_mail},
                    process.env.TOKEN_SECRET,
                    { expiresIn: '120s'}
                )
                // renvoie vers la page authSuccess et transmet  la "variable" access_token
                res.cookie("access_token", token, {httpOnly: true, secure: true})
                res.render('/accueil', {message: {type:"success", msg: "Authentification réussie ("+token+")"}})

                res.render("./accueil", {index : lignes});
            }
            else{
                res.render("./users/connexion");
                
            }
        }, cli_mail, cli_mdp);
        
    },
}