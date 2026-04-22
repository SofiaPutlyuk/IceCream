import axios from "axios";
const loginFetch  = async ({name,email,password,}) => {
    try {
        const response = await axios.post("http://localhost:5000/login",{name,email,password})
        return response.data;
    } catch (error) {
        throw error;
    }
}
export default loginFetch