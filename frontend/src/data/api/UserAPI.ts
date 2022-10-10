import { Api } from "config/axios/AxiosConfig"
import { useAuthContext } from "contexts/AuthContext"
import { UserDTO } from "data/dto/UserDTO"
const create = async (user: UserDTO) => {
    console.log(user)
    const data = await Api.post('/users/create', {
        "name": user.name,
        "cpf": user.cpf,
        "email": user.email,
        "typeUser": user.typeUser,
        "userName": user.userName,
        "birthDate":user.birthDate,
        "password": user.password
    })
    console.log(data)
}

async function getMyAccountData() {

	await Api.get('/users/myUser')
	.then((res) => {
		console.info(res.data as UserDTO)
		return res
	}).catch((error) => {
		console.error(error)
	})
}

export const UserAPI = {
    create,
		getMyAccountData
}
