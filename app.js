//Importation du module express
var express = require('express');
var bodyParser = require('body-parser');


const fs = require('fs')
const https = require('https')          // ajout flux sécurisé
const cors = require('cors')            // Cross Origin Resource Sharing
const morgan = require('morgan')        // logs pour authentification par token
const dotenv = require('dotenv')        // gestion de fichier de configuration (environnement)
const cookieParser = require("cookie-parser")
const path = require('path')  

//Importation du fichier de routage
const Routeur = require('./routes/Routes')
const RouteurProduits = require('./routes/RoutesProduits');
const RouteurClients = require('./routes/RoutesClients');
const RouteurAdmin = require('./routes/RoutesAdmin');


//Déclaration, paramètrage et utilisation de l'app
let app = express()
dotenv.config();
app.set('view engine', 'ejs')
app.use(cors())
app.use(morgan('tiny'))
app.use(cookieParser())

app.use(express.static('views'))
app.set("views",path.resolve(__dirname,'views'))
app.use(express.static('public'))
app.use(express.static(__dirname + '/img'));

app.use('/', Routeur);
app.use('/produits/', RouteurProduits);
app.use('/log/', RouteurClients);
app.use('/admin/', RouteurAdmin);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(require('body-parser').json())

const port = process.env.port || 3000;

const key = fs.readFileSync(path.join(__dirname, 'certificate', 'server.key'))
const cert = fs.readFileSync(path.join(__dirname, 'certificate', 'server.cert'))
const options = { key, cert }

https.createServer(options, app).listen(port, () => {
  console.log(`server running HTTPS. Go to https://localhost:${port}`)
})

