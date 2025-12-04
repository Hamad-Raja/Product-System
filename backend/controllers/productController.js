const Product = require('../models/product.model.js');


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const newProduct = await Product.create({ name, price, category });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};


exports.EditProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }

    await product.update({ name, price, category });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "failed to update product" });
  }
};

exports.deleteProduct = async (req, res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findByPk(id);
        if(!product){
            res.status(404).json({error: "Product not found"});
        };
        await product.destroy();
        res.status(200).json({message: "Product deleted successfully"});
    } catch (err) {
        res.status(500).json({ error: "Failed to delete product" });
    }
}