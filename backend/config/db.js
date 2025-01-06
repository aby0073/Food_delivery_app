import mongoose from "mongoose";

export const connectionDB=async()=>{
    await mongoose.connect('mongodb+srv://royabin963:8y2LbjcQhREExizp@cluster0.tssby.mongodb.net/food-del?').then(()=>console.log("DB connected"));
    
}