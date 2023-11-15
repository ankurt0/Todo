const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
},
{
    timestamps: true,
});

const Task=mongoose.model('Task',taskSchema);

module.exports=Task;