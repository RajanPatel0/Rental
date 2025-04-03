import mongoose from "mongoose";

export const connectDB= async()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(err){
        console.log("Error connecting to MONGODB", err.message);
        process.exit(1);    //means it's a failure, 0 means success
    }
}