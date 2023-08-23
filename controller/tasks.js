const UsersDetail = require('../models/users')
exports.getAllDetails=((req,res,next)=>{
    UsersDetail.findAll()
    .then(users=>{
        res.json({users})
    }).catch(err=>console.log(err))
})
exports.getDetail = ((req,res,next)=>{
    const userId = req.params.userId
    UsersDetail.findByPk(userId).then(response=>{
        res.json({response})
    }).catch(err=>console.log(err))
})
exports.postDetails = ((req,res,next)=>{
    const jsonData = req.body
    UsersDetail.create({name:jsonData.name,number:jsonData.number,email:jsonData.email})
    .then(r=>res.json({r}))
    .catch(err=>console.log(err))
})
exports.deleteUser = ((req,res,next)=>{
    const userId = req.params.userId
    UsersDetail.destroy({where:{id:userId}})
    .then(response=>{
        res.json({response})
    }).catch(err=>console.log(err))
})