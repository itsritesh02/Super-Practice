import bcrypt from 'bcryptjs';
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
try{
  const { email, password } = req.body;
  const existUser = await User.findOne({ email });

  if (existUser) {
    return res.status(400).json({
      message: "User Already Exist",
    });
  }

  const hashpassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashpassword,
  });

  res.status(201).json({
    message: "Register Successful",
    user: {
      id: user._id,
      email: user.email,
    },
  });
}
catch(err){
  console.log(err);
  res.status(500).json({
    message:"server Error"
  })
}


}

export const login = async(req,res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or passwprd",
      });
    }

    const ismatch = await bcrypt.compare(password, user.password);

    if (!ismatch) {
      return res.status(401).json({
        message: "Invalid emaail or password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Lodin SucessFull",
      token,
    });
  } catch (err) {
    console.log("LOGIN ERROR:", err);

    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
}