import { User } from "../models/user.js";


export const getAllUsers = async(req, res) => {

    const users = await User.find({})
    
    res.json({
      success: true,
      users,
    });
  };

export const getNewUsers = async(req, res) => {

    const {name, email, password} = req.body;

    await User.create({
      name,
      email,
      password,
  })
  
  res.status(201).json({
    success: true,
    message: "Register Successfully",
  });
};

export const getDynamicUserID = async(req,res)=>{
    const {id} = req.params;
    const user  = await User.findById(id)

    console.log(req.params);
    res.json({
        success:true,
        user,
    });
};