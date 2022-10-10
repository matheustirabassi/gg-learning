import axios from 'axios'

const Api = axios.create({
    baseURL: "http://localhost:8080"
})


export {Api}
