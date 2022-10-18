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
    }, {headers: {Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJleHAiOjE2NzUzMDcxNjV9.qACNWl9jN9g94TGkbzMYyJnR4YC_cBW_eUUBIlB07RafkpMBNR4bsQyPnZsgqJm_JTzdXNnCTh6IxcAWkEX4Kw"}})
    console.log(data)
    if(data.status === 201){
        console.log("N de erro")
        return "Usuario cadastrado com sucesso!"
    }

    return new Error(data.data.msg)
}

const getMyAccountData = async(token: string): Promise<UserDTO | Error> => {
    try{
        const data = await Api.get('/users/myUser', {headers: {Authorization: token}})

        if (data) {
            return data.data as UserDTO
        }

        return new Error('Erro ao consultar registros.')
    }catch (error) {
        console.error(error)
        return new Error((error as { message: string }).message || 'Erro ao consultar registros.')
    }
}

export const UserAPI = {
    create,
    getMyAccountData
}
