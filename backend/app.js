import express from "express"
import cors from "cors"
import { connectionDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"


// app config
const app=express()
const port =4000


//middleware
app.use(express.json())
app.use(cors())

//DB connections
connectionDB();

//api endpoints
app.use("/api/food",foodRouter);


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})
