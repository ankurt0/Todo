const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoDB');

const db=mongoose.connection;

db.on('error',(err)=>{
    console.log("error connecting to db ",err);
})

db.once('open',()=>{
    console.log("successfuly connected to db");
})

module.exports=db;
