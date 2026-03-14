import Registration from "./registrationModule.js"

export const createUser = async (req,res) => {
    try {
        const seaechUser = await Registration.findOne({
            $or: [
                { email: req.body.email }
            ]
        })
        if(seaechUser){
            return res.status(401).json({message:"The email or passoword already exists."})
        }
        if(req.body.password != req.body.confirmPassword){
            return res.status(402).json({message:"password"})
        }
        const newUser = await Registration.create(req.body)

        res.status(201).json(newUser)
    } catch (e) {
        res.status(400).json(e)
    }
}