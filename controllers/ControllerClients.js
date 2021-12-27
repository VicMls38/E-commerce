
//Importation du fichier models
var Model = require('../models/ModelClients');
const jwt = require("jsonwebtoken");


module.exports = {  

    Panier : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
        res.render("./users/panier", {token: token});
    },

    // Redirection vers l'inscription
    Inscription : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
        res.render("./users/inscription", {token: token});
    },

    Register : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
        let cli_nom = req.body.nom;
        let cli_prenom = req.body.prenom;
        let cli_mail = req.body.email;
        let cli_mdp = req.body.mdp;
        let cli_tel = req.body.tel;
        let cli_adresse = req.body.adresse;
        let cli_ville = req.body.ville;

        Model.Inscription(cli_nom, cli_prenom, cli_mail, cli_mdp, cli_tel, cli_adresse, cli_ville)
        res.render("./users/connexion", {token: token})
    },

    Connexion : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
        res.render("./users/connexion", {token: token});
    },

    // Fonction de connexion avec where //
    Login : (req, res) => {
        let token = jwt.decode(req.cookies.access_token);
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
                res.render('./users/connexion', {token: token})
            }
            if(cli_mdp !== user.mdp){
                //res.status(401).send('Invalid credentials');
                res.render('./users/connexion', {token: token})
            }

            const accessToken = generateAccessToken(user);
            res.cookie("access_token",accessToken)
            var decoded = jwt.decode(accessToken);
            console.log(decoded);
            res.render("./accueil", {token: decoded});
        }
        else{
            res.render('./users/connexion', {token: token})
        }
            


        }, cli_mail, cli_mdp);
        
    },

    Deconnexion : (req, res) =>{
        let token = jwt.decode(req.cookies.access_token);
        res.clearCookie("access_token")
        res.render('./users/connexion', {token: token})
        
    }
}