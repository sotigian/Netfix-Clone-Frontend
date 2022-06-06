import axios from "axios";
const API_URL = "http://localhost:4000/api/auth/";

const register = async  ( firstName,lastName, email,password) => {
    return axios.post(API_URL + "signup", {
        firstName,
        lastName,
        email,
        password,
    });
}

const login = async (email, password) => {
    return await axios.post(API_URL + "signin", {
        email,
        password
    }).then((response) => {
        if (response.data.accessToken){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const getToken = () => {
    return getCurrentUser()?.accessToken;
}



let AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    getToken
};

export default AuthService;