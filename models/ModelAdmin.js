
//Importation de la connexion à la bdd
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    Add_product:function(nom, image, description, categorie, prix){

        var sql="Insert Into produits (Produit_Nom, Produit_Image, Produit_Description, Produit_CatNom, Produit_Prix) Values ('"+nom+"', '"+image+"', '"+description+"', '"+categorie+"', '"+prix+" €') ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) created");
          });
    
    },
    

}