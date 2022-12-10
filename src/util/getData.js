import axios from "axios";
const getData = async() => {
    const response = await axios.get("https://api.github.com/users")
    return response.data
}
 
export default getData;