
// third party 
import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

import cors from 'cors';

// file 
import connectDB from "./src/config/db.js"
import authMiddleware from "./src/middlewares/authMiddleware.js";
import authRouter from './src/modules/auth/auth.routes.js';
import GitAuthRouter from './src/modules/gitAuth/git.auth.route.js';

// data or objects
const app = express();
const port = 5000;

connectDB();

app.use(cors({
    origin: "http://localhost:3000", // or 5173
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

// api to get user info based on token 
app.get('/auth/me', authMiddleware,  (req, res) => {
    return res.json({
        success: true,
        user: req.user
    });
})


app.use("/accounts", authRouter);
app.use('/gitAuth', GitAuthRouter);

// open server to listen requests
app.listen(port,() =>{
    console.log(`Server is running on PORT : ${port}`);
})

// now all api and middleware will defined here 