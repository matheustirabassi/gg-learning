import { UserDTO } from "data/dto/UserDTO"
import { UserAPI } from "data/api/UserAPI"
import * as yup from "yup"
import "../../../assets/yup/TraducoesYup"

const createAccountSchema = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    birthDate: yup.string().required().min(10).max(10),
    typeUser: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().required().min(3),
})

const createUser = async (user: UserDTO): Promise<string | Error> => {
    const data = await UserAPI.create(user)

    if(data instanceof Error){
        console.log("Deu erro")
        return new Error(data.message)
    }else{
        return "Usuário cadastrado com sucesso"
    }
}

export const CreateAccountViewModel = {
    createUser,
    createAccountSchema
}
