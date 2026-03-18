import Login from "./loginModule"
export const loginUser = async (req,res) => {
    try {
        const user = await Login.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== req.body.password) {
            return res.status(401).json({ message: "Wrong password" });
        }

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}