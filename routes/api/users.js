const User=require('../../db').User;
const route=require('express').Router();

route.get('/',(req,res)=>
{
    //Send array of all users in database
    User.findAll().then((users)=>{
        res.status(200).send(users);
    }).catch((err)=>
    {
        res.status(500).send({error:'Could retrieve users :( '});

    })
})

route.post('/',(req,res)=>
{
    //req will have a name in it.
    let name=req.body.name;
    User.create({name:name}).then((user)=>
    res.status(201).send(user)
    ).catch((err)=>
    res.status(501).send({error:'Could\'nt create user'}));
})
exports=module.exports={route};