import axios from 'axios';

export const axiosSignup = axios.create({
    baseURL: "https://winter-vacation-sre-project.herokuapp.com/api/user/register",
})
export const axiosLogin = axios.create({
    baseURL: "https://winter-vacation-sre-project.herokuapp.com/api/user/login",
})
export const axiosPost = axios.create({
    baseURL: "https://winter-vacation-sre-project.herokuapp.com/api/user/post",
})