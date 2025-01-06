import path from 'path';
// console.log(path.resolve('../models/foodModel.js'));  // This will log the absolute path to foodModel.js
import foodModel from '../models/foodModel.js';

import fs from 'fs'

//add food item

export const addFood=async(req,res)=>{

    let image_filename=`${req.file.filename}`;


    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({sucess:true,message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({sucess:false,message:"Error"})
    }
}
