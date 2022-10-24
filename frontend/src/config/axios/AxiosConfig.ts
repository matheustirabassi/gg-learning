import axios from 'axios'

const Api = axios.create({
    baseURL: "https://gglearning-backend.herokuapp.com",
})


export {Api}
