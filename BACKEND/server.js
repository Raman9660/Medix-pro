import app from "./app.js"
import cloudinary from "cloudinary"

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => { 
    console.log(`Server is running on port ${process.env.port}`)  // Log the server start message to the console.  // This will be displayed when the server starts up successfully.  // Note: Replace 'app' with your actual app variable.  // This will be the object returned by your Express app setup.  // 'app.listen()' is a built-in method provided by Express that starts the server.  // The first argument is the port number on which the server will run.  // The second argument is a callback function that will be executed when the server starts successfully.  // Inside the callback function, we log a message to the console to indicate that the server is running.  // This message will be displayed when the server starts up successfully.  // Replace '4000' with your desired port number.  // 'console.log()' is a built-in JavaScript function that logs messages to the console.  // The message
})