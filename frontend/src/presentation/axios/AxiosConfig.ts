import axios from 'axios'

const Api = axios.create({
    baseURL: "https://gglearning-backend.herokuapp.com",
		headers: {
			Authorization : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJleHAiOjE2NzUzMDcxNjV9.qACNWl9jN9g94TGkbzMYyJnR4YC_cBW_eUUBIlB07RafkpMBNR4bsQyPnZsgqJm_JTzdXNnCTh6IxcAWkEX4Kw"
		}
}
)

export {Api}
