import express from 'express'
import { createUser } from "./registrationController.js"

const Registrationrouter = express.Router()

Registrationrouter.post("/",createUser)

export default Registrationrouter