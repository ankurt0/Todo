const express=require('express');
const port='8000';
const db=require('./config/mongoose');
const passport=require('passport');
const session=require('express-session');
const passportJWT=require('./config/passport_jwt_strategy');
const mongoStore=require('connect-mongo');


const app=express();

// app.get('/',function(req,res){
//     return res.end('<h1>HI world</h1>');
// })

app.use(express.urlencoded());

app.use(session({
    name: 'Todo',
    secret: "secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*20)
    },
    store: mongoStore.create({ 
        mongoUrl: 'mongodb://localhost:27017/todoDB' ,
        autoRemove:'disabled'
    })
}));

app.use('/',require('./routes')); 

app.listen(port,function(err){
    if(err)
        {console.log("there is some error with the server ",err);}
    else{
        console.log("server is running fine on port",port);
    }
})