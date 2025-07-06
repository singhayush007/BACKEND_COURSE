// console.log("Hello , Ayush from Nodejs!")


// OS MODULE 
// const os = require("os");

// console.log(os.arch())

// console.log(os.platform())

// console.log(os.cpus().length)

//  console.log(os.freemem())

// console.log(os.type())

// const uptime = os.uptime();
// console.log(`System Uptime: ${Math.floor(uptime / 3600)} hours`);

// console.log(os.userInfo())





// PATH MODULE 

// const { Console } = require("console");
// const path = require("path");

// console.log(__dirname)
// console.log(__filename)


// 1. Join()
// const filePath = path.join(__dirname, "data" , "student" , "data.txt")
// console.log(filePath)  


// 1. Parse()
// console.log(path.parse(filePath))

// 2. Resolve()
// console.log(path.resolve(filePath))

// 3 . Extname()
// console.log(path.extname(filePath))

// 4. Basename ()
// console.log(path.basename(filePath))

// 5.Dirname
//console.log(path.dirname(filePath))


// const EventEmitter = require ("events")

// const emitter = new EventEmitter()

// 1. Craeting Phase which is .on

// emitter.on("GREET" , ()=> {
//     console.log("Hello Guys!")
// })
// 2. Using Phase which is .emit()
// emitter.emit("GREET")
// Greet ---> hello guys!


// emitter.on("LOGIN" , (data)=>{
//     console.log(data)
// })

// emitter.emit("LOGIN" , {username: "Ayush" , email: "ayushsingh24958@gmail"})



const EventEmitter = require("events");
const emitter = new EventEmitter();

// 1. LOGIN
emitter.on("LOGIN" , (username)=>{
    console.log(`${username} logged in successfully`)
})


emitter.emit("LOGIN" , "Ayush")
// 2 . LOGOUT

// 3. PURCHASE

// 4. PROFILEUPDATE


