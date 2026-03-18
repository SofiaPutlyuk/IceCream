import express from "express"
import Login from "./loginModule.js";

const loginRouter = express.Router()

loginRouter.post("/",Login)

export default loginRouter