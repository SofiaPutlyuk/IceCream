import Registration from "./registrationModule.js"

export const createUser = async (req,res) => {
    try {
        const seaechUser = await Registration.findOne({
            $or: [
                {firstName: req.body.firstName},
                {lastName:req.body.lastName},
                {email: req.body.email},
                {password:req.body.password}
            ]
        })
        if(seaechUser){
            return res.status(409).json({message:"The firstName,lastName,email or password already exists."})
        }
        if(req.body.password != req.body.confirmPassword){
            return res.status(402).json({message:"password"})
        }
        const newUser = await Registration.create(req.body)

        res.status(201).json(newUser)
    } catch (e) {
        res.status(400).json("user not created.")
    }
}