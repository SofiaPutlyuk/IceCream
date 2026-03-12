import connectDB from "../db.js"
import express from "express"
import Registrationrouter from "./registrationRoute.js"
const app = express()
app.use(express.json())
connectDB()
const PORT = 5000
app.use("/registration",Registrationrouter)
app.listen(PORT, () => {
    console.log("Порт запущений:", PORT)
})