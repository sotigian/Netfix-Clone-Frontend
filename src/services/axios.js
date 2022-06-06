import AuthService from "./auth_service";
import axios from 'axios';


axios.defaults.headers.common['Authorization'] = `Bearer ${AuthService.getToken()}`;
// console.log("token")
export default axios;