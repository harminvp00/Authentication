import "dotenv/config";
import connectDB from "./src/config/db.js"
import express from "express";
const app = express();
const port = 3000;
import authRouter from './src/modules/auth/auth.routes.js';
import GitAuthRouter from './src/modules/gitAuth/git.auth.route.js';

connectDB();
app.use(express.json());
app.use("/accounts", authRouter);
app.use('/gitAuth', GitAuthRouter);

// open server to listen requests
app.listen(port,() =>{
    console.log(`Server is running on PORT : ${port}`);
})

// now all api and middleware will defined here 