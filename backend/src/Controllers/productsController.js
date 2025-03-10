const productsController = {};

import Products from "../models/Products.js";


//SELECT asinc = corrutina ira linea por linea
productsController.getProducts = async(req,res)=>{
    const products = await Products.find()
    res.json(products)
}

//Inse
productsController.insertProducts = async(req,res)=>{
    
    const {name, description,price,stock} = req.body;
    const newProduct = new Products({name, description,price,stock})

    await newProduct.save()

    res.json({message:"Product saved"})
}

//delete 
productsController.deleteProduct = async (req,res) => {
    await Products.findByIdAndDelete(req.params.id);
    res.json({message: "Product delete"})
}

//update
productsController.updateProduct = async (req,res)=>{
    const {name, description,price,stock} = req.body;
    const updateProduct = await Products.findByIdAndUpdate(req.params.id,{name, description,price,stock}, {new:true})
    res.json({message:"Product updated"})
}

export default productsController;