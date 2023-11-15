const Task=require('../../../models/task');
const User = require('../../../models/user');

module.exports.index=async function(req,res)
{
    try{
        let tasks=await Task.find({}).populate('user');
        return res.json(200,{
            message: 'checkout the get response',
            tasks: tasks,
        })
    }
    catch(err)
    {
        return res.json(404,{
            message: 'Internal server issue',
        })
    } 
}

module.exports.createPost=function(req,res){
    console.log("req ",req.body,req.user);
    Task.create({
        content: req.body.content,
        user: req.user._id || '123',
    })
    .then((task)=>{
        return res.json(200,{
            message: 'checkout the post response',
            task: task,
        })
    })
    .catch((err)=>{
        return res.json(404,{
            message: 'Internal server issue',
        })
    })

}
