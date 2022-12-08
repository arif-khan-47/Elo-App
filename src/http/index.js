import axios from "axios";

const API = axios.create({
    // baseURL : process.env.REACT_APP_BASEURL,
    baseURL: 'http://192.168.1.18:5000',

    // withCredentials: true,
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        // 'Access-Control-Allow-Origin': 'http://192.168.19:8081',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

    }
});

const getAPI = axios.get('http://192.168.1.18:5000');


export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
export const interest = () => getAPI.get("/interest");

export default API;