const express = require('express')
const app = express()
const dotenv = require("dotenv")
const morgan = require('morgan')
dotenv.config();



// Middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routes
const resRoute = require('./routes/restaurant');

// Routes Middleware
app.use('/api/v1', resRoute);

app.get("/", (req, res) => {
    res.json({
        "hello": "world"
    })
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port} ... `))