const jwt = require('jsonwebtoken');
module.exports = {  

    AuthenticateToken:(req, res, next) =>{
    
    const authcookie = req.cookies;
    console.log(authcookie);
    const token = authcookie.access_token;
    console.log(token)
    //const token = authHeader && authHeader.split(' ')[1];
  
    
    if(!token){
        return res.sendStatus(401);
    }
    console.log(process.env.ACCESS_TOKEN_SECRET)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if(err){
           
            return res.sendStatus(401);
        }
        req.user = user;
        //console.log(req.user);
        next();
    })
    }

}