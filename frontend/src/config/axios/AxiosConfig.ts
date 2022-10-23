import axios from 'axios'

const Api = axios.create({
    baseURL: "http://gglearning-backend.herokuapp.com",
})


export {Api}
