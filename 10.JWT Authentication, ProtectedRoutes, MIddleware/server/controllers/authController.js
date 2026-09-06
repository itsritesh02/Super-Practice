import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
export const login = async(req,res)=>{
try{
  const {email,password}= req.body;
  const user = await User.findOne({email});

  if(!user){
    return res.status(401).json({
      message:"Invalid email or password"
    })
  }


  const isMatch = await bcrypt.compare (password,user.password) ;

  if(!isMatch){
    return res.status(401).json({
      message:"Invalid email or password"
    })
  }

  const token = jwt.sign(
    { userId: user._id }, 
    process.env.JWT_SECRET,
  {expiresIn:"1d"}
  );


  res.status(200).json({
    message: "Login Successful",
    token
  })
}
catch(err){
  console.log(err);
  res.status(500).json({
    message:"Server Error"
  })
  
}
};