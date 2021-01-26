import axios from 'axios'

//axios.defaults.withCredentials = true;

export default axios.create({
    baseURL: 'http://192.168.31.160:8000',
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json"
    },
    withCredentials: true,
    responseType: "json"
})