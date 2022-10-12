import axios from 'axios'

const Api = axios.create({
    baseURL: "http://localhost:8080",
		headers: {
			Authorization : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbWFpbDJAZW1haWwuY29tIiwiZXhwIjoxNjc1OTYxNTEzfQ.FGHJ6Q6Se3hdmbj0TKtLxWEjBJ20qLvtuKM3AYDCxIi6qjmgZWTFbMQqnJFPTEBQ0CsQdXDZQZmPmhMmycHyqA"
		}
}
)

export {Api}
