
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
            let ligne = JSON.stringify(lignes);
            ligne = JSON.parse(ligne);

            const user = {
                id: ligne[0].Cli_Id,
                nom: ligne[0].Cli_Nom,
                email: ligne[0].Cli_Mail,
                mdp: ligne[0].Cli_Mdp
            }
            console.log("user : " + user);

            function generateAccessToken(user){
                return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});
            }

            if(cli_mail !== user.email){
                //res.status(401).send('Invalid credentials');
                res.render('./users/connexion')
            }
            if(cli_mdp !== user.mdp){
                //res.status(401).send('Invalid credentials');
                res.render('./users/connexion')
            }

            const accessToken = generateAccessToken(user);
            res.cookie("access_token",accessToken);
            res.render("./accueil", {index : user});
        }
        else{
            res.render('./users/connexion')
        }
            


        }, cli_mail, cli_mdp);
        
    },
}