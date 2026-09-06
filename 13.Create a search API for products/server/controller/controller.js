// Create a search API for products.

export const searchProducts = async (req, res) => {
  try {
    const { search } = req.query;
    const products = await product.find({
      title: { $regex: search, $option: "i" },
    });

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create an API to get a product by ID.

export const getProducts = async (req, res) => {
  try {
    const product = await product.findById(req.params.id);
    if (!product) {
      return (
        res.status(404),
        json({
          message: " Product not found",
        })
      );
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};


// Create an API to update product details.



export const updateProducts = async()=>{
  try{
    const product = await product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    res.json(product);
  }catch(err){
    console.log(err);
    
  }
}

// Create an API to delete a product.

export const deleteProduct = async (req,res)=>{
  try{
    const product = await product.findBtIdAndDelete(req.params.id);
  res.json(product)
  }
  catch(err){
    console.log(err);
    
  }
}