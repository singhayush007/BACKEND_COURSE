import express from "express";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies


const data = [{
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com"    
},
{
    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com"    
},
{
    id: 3,
    name: "Alice Smith",
    email: "alicesmith@example.com",
}, 
];


app.get ("/get-user" , (req , res) =>{
    res.status(200).json(data);
});

// Routes Params
app.get("/get-users/:id", (req,res) =>{
    const {id} = req.params;
    const user = data.find(user => user.id === Number(id));
    res.status(200).json(user);
});


// Query Params
app.get("/get-user", (req, res) => {
    const { name, age } = req.query;

data.push({
    id: data.length + 1,
    name,
    email
});


res.status(201).json({
    success: true,
    message: "User created successfully",
    data
});


res.status(200).json({name , age})
});


app.get("/", (req, res) => {
  res.send("Hello World");
});


// API ENDPOINTS
app.get("/api/v1/welcome", (req, res) => {
  console.log("Request is coming..");
  res.status(200).send("Welcome to the ExpressJS Tutorial");

  res.status(200).json("Welcome to our API Endpoint");
});


// POST

app.post("/create-user", (req, res) => {
  const {name , email} = req.body;

  res.status(201).json({name , email});
});





app.listen(8000, () => {
  console.log("Hello World");
});

