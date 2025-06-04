
import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { dbconnection } from "./database/dbconnection.js";
import messageRouter from "./router/messageRouter.js"
import { errorMiddleware } from "./middlewares/errorMiddlewares.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

config({ path: "./config/config.env" })
const app = express();
 
// middleware connect frontend and backend
app.use( 
    cors({
        origin: ['http://localhost:5174', 'http://localhost:5173'],// Allow requests from this origin
        method: ["GET", "POST", "DELETE", "PUT"],// Specify allowed methods
        credentials: true,// Enable this if your request includes cookies or authentication
    })
);

// middleware.....................
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);
// routes middleware.........................
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);


// database connection process
dbconnection();

// error middleware...............
// this middleware will always use at the last
app.use(errorMiddleware);
export default app