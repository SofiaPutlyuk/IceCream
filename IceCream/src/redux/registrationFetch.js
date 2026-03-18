import axios from "axios"
import { toast } from "react-toastify"
const registrationFetch = ({firstName,lastName,email,password,confirmPassword}) => {
    const userFind = () => toast.error("")
    try {
        const response =  axios.post("http://localhost:5000/registration",({firstName,lastName,email,password,confirmPassword}))
    } catch (error) {
        userFind(error.message)
    }
}

export default registrationFetch