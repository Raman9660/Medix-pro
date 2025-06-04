import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MEDIXPRO",
    }).then(() => { 
        console.log("Connected to MongoDB");
    }).catch ((err) => {
        console.log(`someerror: ${err}`)
    });
}


















