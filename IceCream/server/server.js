import connectDB from "../db.js"
import express from "express"
import Registrationrouter from "./registration/registrationRoute.js"
import cors from "cors"
import loginRouter from "./login/loginRoute.js"
const app = express()
app.use(express.json())
connectDB()
const PORT = 5000
app.use(cors({
    origin: 'http://localhost:5173' 
}));
app.use("/registration",Registrationrouter)
app.use("/login",loginRouter)
app.listen(PORT, () => {
    console.log("Порт запущений:", PORT)
})