import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

// middlewares start with app.use
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// our server will accpet json files but with limit
app.use(express.json({limit: "16kb"}));
// this will configure the data that will come after filling form
app.use(express.urlencoded({extended: true, limit: "16kb"}));
// public is the name of the folder
app.use(express.static("public"));
app.use(cookieParser());



// Routes import 
import userRouter from "./routes/user.routes.js"

// Routes Declaration
// here we will use middleware that will take us to the router that we have defined in the function
app.use("/api/v1/users", userRouter)


export {app}