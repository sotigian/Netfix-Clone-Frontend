import axios from "./axios";
const API_URL = "http://localhost:4000/api/user/";

const getAllUsers = () => {
    return axios.get(API_URL + 'all')
        .then((res) => {
            //console.log(res.data)
            return res.data;
        })
}
const getOneUser = (id) => {
    return axios.get(API_URL + `getone/${id}`)
        .then((res) => {
            //console.log(res.data)
            return res.data;
        })
}

let UserService = {
    getAllUsers,
    getOneUser
};

export default UserService;