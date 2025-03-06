import { generateToken } from "../lib/util.js";
import User from "../models/user.model";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
   const {fullName,email,pasword} = req.body;
   try{

    if(!fullName || !email || !pasword){
        return res.status(400).json({message:"All fields required"});
    }    
    if(pasword.length<6){
        return res.status(400).json({message:"Password must be at least 6 characters"});
    } 

    const user = await User.findOne({email});

    if(user) return res.status(400).json({message:"Email all ready exists"});

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(pasword,salt);

    const newUser = new User({
        fullName,
        email,
        password:hashedPassword,
    });

    if(newUser){
        generateToken(newUser._id,res);
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            profilePic:newUser.profilePic,
        });

    }else{
        return res.status(400).json({message:"Invalid User Data"});
    }

   } catch(error){
    console.log("Error in singup Controller",error.message);
    res.status(500).json({message:"Internal Server Error"})
   }
   
};

export const login = (req, res) => {    
    res.send("Login route hit - handle the login logic here");
};

export const logout = (req, res) => {
    res.send("Logout route hit - handle the logout logic here");
};
