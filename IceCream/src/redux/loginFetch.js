import axios from "axios";

const loginFetch  = ({firstName,lastName,email,password,confirmPassword}) => {

    try {
        const response = axios.post("http://localhost:5000/login",{firstName,lastName,email,password,confirmPassword}).then(res => console.log(res))
    } catch (error) {
        
    }
}
export default loginFetch