import { UserDTO } from "data/dto/UserDTO"
import { Api } from "presentation/axios/AxiosConfig"

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

export const UserAPI = {
    create
}