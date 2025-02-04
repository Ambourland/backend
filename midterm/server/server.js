const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
app.use(express.json())

app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
))
const PORT = 3000

// const Schema = mongoose.Schema
// const ToDoSchema = new Schema(
//     {
//         todo: {
//             type: String,
//             required: true
//         },
//         created: Number
//     }
// )
// const ToDo = mongoose.model("ToDo", ToDoSchema)

app.get("/test", (req, res) => {
    console.log("Test HIT")
    res.json({msg:"yup!"})
})