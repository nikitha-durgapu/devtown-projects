const fs = require("fs/promises");
const { isAuthorised } = require("../middlewares");
const uuid =require('uuid');
const { json } = require("express");

const router = require("express").Router();

router.get("/", isAuthorised, async (req, res) => {
    try {
        const { user } = req;
        const products = await fs.readFile("./db/product.json", "utf8");
        const parsedProducts = JSON.parse(products);
        return res.json({
            data: parsedProducts.filter((product) => product.userId === user.id),
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server error",
          success: false,
        });
    }
})

router.post('/',isAuthorised,async(req,res)=>{
    try{
        const {user} = req
        const {name} = req.body
        const {description} = req.body
        if(!name || !description){
            if(!name){
            return res.status(400).json({
                message:'title is required',
                success:false
            })}
            if(!description){
                return res.status(400).json({
                    message:'Description is required',
                    success:false
                }) 
            }
        }
        const product = {
            id:uuid.v4(),
            name,description,
            complete:false,
            userId:user.id
        }
        const products = await fs.readFile('./db/product.json','utf8')
        const parsedProducts = JSON.parse(products)
        parsedProducts.push(product)
        await fs.writeFile('./db/product.json',JSON.stringify(parsedProducts))
        return res.json({
            data:product,
            success:true,
            message:'Product created successfully'

        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server error",
          success: false,
        });
      }
})

router.patch('/:id',isAuthorised,async(req,res)=>{
    try{
        const {user} = req
        const {id:productId} = req.params
        const {name,complete,description} = req.body

        const products = await fs.readFile('./db/product.json','utf8')
        const parsedProducts = JSON.parse(products)
        const product = parsedProducts.find((product)=>product.id === productId)
        if(!product){
            return res.status(404).json({
                message:'Product not found',
                success:false
            })
        }
      
        if(product.userId !== user.id){
            return res.status(401).json({
                message:'unauthorized',
                success:false
            })
        }
   
        if(name !== undefined){
            product.name = name
        }
        if(description !== undefined){
            product.description = description
        }
        if(complete !== undefined){
            product.complete = complete
        }
        await fs.writeFile('./db/product.json',JSON.stringify(parsedProducts))
        return res.json({
            data:product,
            success:true,
            message:'product updated successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server error",
          success: false,
        });
      }
})

router.delete('/:id',isAuthorised,async(req,res)=>{
    try {
        const {user} = req
        const {id:productId} = req.params
    
        const products = await fs.readFile('./db/product.json','utf8')
        const parsedProducts = JSON.parse(products)
        const product = parsedProducts.find((product)=>product.id === productId)
        if(!product){
            return res.status(404).json({
                message:'Product not found',
                success:false
            })
        }
        if(product.userId !== user.id){
            return res.status(401).json({
                message:'unauthorized',
                success:false
            })
        }
        
        updatedProducts =  parsedProducts.filter(deleteProduct => deleteProduct.id !== product.id)
        
        await fs.writeFile('./db/product.json',JSON.stringify(updatedProducts))
        return res.json({
            data:product,
            success:true,
            message:'Product deleted successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server error",
          success: false,
        });
    }
    
})


module.exports = router;