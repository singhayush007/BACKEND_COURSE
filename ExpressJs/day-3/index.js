import express from 'express';
import cookieParser from 'cookie-parser';


const app = express();
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get("/set-cookies" , (req, res) => {
    // Set cookies
    // res.cookie("token", "my-token" , {maxAge: 1000 * 60 * 60 * 24}); // 1 day
    res.cookie("theme", "dark");
    res.send("Cookies have been set");
});


app.get("/get-cookies" , (req, res)=>{
    // Get cookies
    console.log(req.cookies.token); // undefined if cookie-parser is not used
    // console.log(req.headers.cookie); // This will log the cookies from the request headers
    res.send("cookies get");
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

