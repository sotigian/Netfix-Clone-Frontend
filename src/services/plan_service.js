import axios from "./axios";
const API_URL = "http://localhost:4000/api/plan/";

const buyPlan = async (user, plan) => {
    return axios.post(API_URL + "buy", {
        user,
        plan,
    });
}

const readPlan = async () => {
    return axios.post(API_URL + "read", {
    });
}

const getUserPlan = async (id) => {
    return axios.get(API_URL + `readuserplan/${id}`, {
    });
}

let PlanService = {
    buyPlan,
    readPlan,
    getUserPlan
};

export default PlanService;