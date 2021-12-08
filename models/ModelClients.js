
//Importation de la connexion à la bdd
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    Inscription:function(cli_nom, cli_prenom, cli_mail, cli_mdp, cli_tel, cli_adresse, cli_ville){

        var sql="Insert Into clients (Cli_Nom, Cli_Prenom, Cli_Mail, Cli_Mdp, Cli_Age, Cli_Tel, Cli_Adresse, Cli_Ville, Cli_Droit) Values ('"+cli_nom+"', '"+cli_prenom+"', '"+cli_mail+"', '"+cli_mdp+"', '20', '"+cli_tel+"', '"+cli_adresse+"', '"+cli_ville+"', '0') ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) created");
          });

    }


    /* Exemple req sql 

    Clients_affichage:function(callback){
  
    
        var sql='SELECT cli_Id, cli_secu, cli_nom, cli_prenom FROM client';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
        
    },


    Ajouter_client:function(cli_secu, cli_nom, cli_prenom, cli_naissance, cli_mutuelle){

        var sql="Insert Into client (cli_secu, cli_nom, cli_prenom, cli_naissance, cli_mutuelle) Values ('"+cli_secu+"', '"+cli_nom+"', '"+cli_prenom+"', '"+cli_naissance+"', '"+cli_mutuelle+"') ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) created");
          });
    },

    Delete_Client:function(cli_Id){

        var sql="Delete From client where cli_Id = '"+cli_Id+"'";
        console.log(sql);
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) Deleted");
          });
    },

    Medocs_update_besoin: (medoc, mois, medoc_Id) =>{
        

        let sql = "UPDATE medicament SET medoc_besoin"+mois+" = '"+medoc+"' WHERE medoc_Id = '"+medoc_Id+"'";
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
    },
    */



}