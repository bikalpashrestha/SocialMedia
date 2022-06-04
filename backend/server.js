require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')



const app = express()
app.use(bodyParser.json()) 
app.use(cors())
app.use(cookieParser())


//Routes 
app.use("/api",require("./routes/authRouter"))


const URI = process.env.MONGODB_URL  
mongoose.connect(URI, {
    useNewUrlParser: true,  
    useUnifiedTopology: true 
}, err => { 
    if(err) throw err;
    console.log('Connected to mongodb')
})
 


// Create peer server
ExpressPeerServer(http, { path: '/' })

const port = process.env.PORT || 5000
http.listen(port, () => {
    console.log('Server is running on port', port)
})   