import { Api } from "config/axios/AxiosConfig"
import { UserDTO } from "data/dto/UserDTO"
<<<<<<<< HEAD:frontend/src/data/api/UserAPI.ts
const create = async (user: UserDTO) => {
    console.log(user)
    const data = await Api.post('/users/create', {
========
import { Api } from "presentation/axios/AxiosConfig"

const create = async (user: UserDTO): Promise<string | Error> => {
   const data = await Api.post('/users/create', {
>>>>>>>> main:frontend/src/presentation/api/UserAPI.ts
        "name": user.name,
        "cpf": user.cpf,
        "email": user.email,
        "typeUser": user.typeUser,
        "userName": user.userName,
        "birthDate": user.birthDate,
        "password": user.password
    })
    console.log(data)
    if(data.status === 201){
        console.log("N de erro")
        return "Usuario cadastrado com sucesso!"
    }

    return new Error(data.data.msg)
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
