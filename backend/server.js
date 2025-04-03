import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//routes
import authRoutes from "./routes/auth.route.js";
import propertyRoutes from "./routes/property.route.js";

import{connectDB} from "./lib/db.js";

dotenv.config();    //allow to read content of .env file

const app=express();
const PORT=process.env.PORT || 5000;


app.use(express.json({ limit: "10mb" }));    //allows to parse body of the request
app.use(cookieParser());

app.use("/api/auth",authRoutes);    //authentication route
app.use("/api/property",propertyRoutes);    //property route

app.listen(PORT,()=>{
    console.log("server is running on http://localhost:"+PORT);
    connectDB();
});