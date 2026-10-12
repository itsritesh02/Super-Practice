// productController.js

import Product from "./Product.js";

// CREATE
export const createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const product = await Product.create({
      name,
      price,
      category,
    });

    res.status(201).json({
      message: "Product Created",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// READ ALL
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// READ ONE
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// UPDATE
export const updateProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        category,
      },
      { new: true },
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product Updated",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// DELETE
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product Deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
