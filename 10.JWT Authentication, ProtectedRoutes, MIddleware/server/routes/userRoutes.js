import express from 'express';
import authMiddleware from '../middleware/authMiddleware';
import { login } from '../controllers/authController';

const router = express.Router();



router.get("/profile",authMiddleware,(req,res)=>{
  res.json({
    message:"Protected Profile",
    user:req.user
  })
})



export default router;