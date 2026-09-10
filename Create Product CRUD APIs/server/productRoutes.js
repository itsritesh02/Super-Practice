
import express from 'express'
import { createProduct } from './ProductController';
const router =  express.Router();

router.post('/create',createProduct);


export default router;