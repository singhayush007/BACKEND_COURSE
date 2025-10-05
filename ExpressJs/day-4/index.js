import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'

// ✅ First create express app
const app = express();

// ✅ Then apply middlewares
app.use(cookieParser("AyushSingh"));

app.use(session({
    secret: "mysecret",
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24  // 1 day
    }
}));

// ✅ Route
app.get("/", (req, res) => {
    console.log(req.session);
    console.log(req.session.id);
    res.send("Hello world!");
});


//  ✅ Login Routes

app.get("/login", (req, res)=>{
    req.session.user = {
    name : 'Ayush',
    email: "ayushsingh24958@gmail.com",
    age: 22
};

res.json(`login Successfully ${(req.session.user.name)}`)
})

app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.send("Logout Successfulyy")
})

// ✅ Listen
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
