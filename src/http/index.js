import axios from "axios";

const API = axios.create({
    // baseURL : process.env.REACT_APP_BASEURL,
    baseURL: 'http://192.168.1.15:5000',


    // withCredentials: true,
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        // 'Access-Control-Allow-Origin': 'http://192.168.19:8081',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

    }
});

// const GETAPI = axios.get('http://192.168.1.6:5000');
// const GETAPI = axios.create({
//     baseURL: 'http://192.168.1.16:5000',
//     timeout: 1000,
//     headers: { 'X-Custom-Header': 'foobar' }
// });


export const register = (data) => API.post("/api/v1/register", data);
export const login = (data) => API.post("/api/v1/login", data);
export const interest = ( ) => API.get("/api/v1/interest");
export const editProfile = (data) => API.put("/api/v1", data)

export default API;