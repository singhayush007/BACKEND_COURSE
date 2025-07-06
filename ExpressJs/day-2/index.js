import express from "express";
import userRouter from "./routes/user.routes.js";
const app = express();



app.get("/" , (req, res)=>{
    res.send('Hello World')
})

app.use("/api/v1/user",userRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


// Global Middleware
// Specific Middleware
// Inbuilt Middleware


// Use case of Midldleware ---> Request (Modify , Attach , Update)
// 1: logger
// 2: Authentication
// 3: Authorization
// 4: Error Handling
// 5: Compression


// function logger (req , res , next) {
//     console.log(req.method , req.url)

//     next(); // Assignmennt : Read more about Next()
// }



// app.get("/about" , logger , SayHello  (req, res)=>{
//     res.send('About Page')
// })

// app.get('/contact' , (req, res)=>{
//     res.send('Contact Page')
// })

// app.get("get-users" , (req, res)=>{
//     res.send('get-users')
// })

// app.get("get-all-users" , (req , res)=>{
//     res.send('get-all-users')
// })

// ai-models


// messaging


// task