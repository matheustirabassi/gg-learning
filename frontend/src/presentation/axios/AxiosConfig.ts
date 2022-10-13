import axios from 'axios'

const Api = axios.create({
    baseURL: "http://localhost:8080",
		headers: {
			Authorization : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaWd1ZWxAZ21haWwuY29tIiwiZXhwIjoxNjc1NjkzMjI5fQ.AgPnKJWE0DhterYCzh54ALx1rA2afpyF3rP9D0-Ga3fhU6-10Ck6I7lou2Wp7gfcRjj5ZTmzhPr1ULcNPl2GRw"
		}
}
)

export {Api}
