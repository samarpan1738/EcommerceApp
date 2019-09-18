const Product=require('../../db').Product;
const route=require('express').Router();

route.get('/',(req,res)=>
{
    //Send array of all users in database
    Product.findAll().then((products)=>{
        res.status(200).send(products);
    }).catch((err)=>
    {
        res.status(500).send({error:'Could retrieve products :( '});

    })
})

route.post('/',(req,res)=>
{

    //Validate Price
    if(isNaN(req.body.price))
        return res.status(403).send({error:"Price is not valid."});
    let manufacturer="";
    if(req.body.manufacturer)
        manufacturer=req.body.manufacturer;
    Product.create({name:req.body.name,price:parseFloat(req.body.price),manufacturer:manufacturer})
    .then((product)=>res.status(201).send(product))
    .catch((err)=>res.status(501).send({error:"Couldnt create product."}));
})
exports=module.exports={route};