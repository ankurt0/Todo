const express=require('express');
const router=express.Router();
const taskAPIController=require('../../../controllers/api/v1/task_api_controller');
const passport = require('passport');

router.get('/',taskAPIController.index);
router.post('/create',passport.authenticate('jwt',{session: false}),taskAPIController.createPost);

module.exports=router;