import { Api } from "config/axios/AxiosConfig"
import { UserDTO } from "data/dto/UserDTO"

const create = async (user: UserDTO): Promise<string | Error> => {
   const data = await Api.post('/users/create', {
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

async function getMyAccountData(token: string) {

    await Api.get('/users/myUser', {headers: {Authorization: token}})
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
