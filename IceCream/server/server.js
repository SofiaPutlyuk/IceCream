import connectDB from "../db.js"
import express from "express"
const app = express()
app.use(express.json())
connectDB()
const PORT = 5000
app.listen(PORT, () => {
    console.log("Порт запущений:", PORT)
})