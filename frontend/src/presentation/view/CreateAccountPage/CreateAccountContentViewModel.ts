import * as yup from "yup"
import "../../../assets/yup/TraducoesYup"
import { Api } from "presentation/axios/AxiosConfig"

export interface ICreateAccountInput {
    name: string
    cpf: string
    email: string
    birthDate: string
    typeUser: string
    userName: string
    password: string
}

export type UserType = { label: string, value: string }

const createAccountSchema = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    birthDate: yup.string().required().min(10).max(10),
    typeUser: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().required().min(3),
})

const createUser = async (user: ICreateAccountInput) => {
        const data = await Api.post('/users/create', {
            "name": user.name,
            "cpf": user.cpf,
            "email": user.email,
            "typeUser": user.typeUser,
            "userName": user.userName,
            "password": user.password 
        })
        console.log(data)
        if (data) {
            console.log(data)
        }else{
            console.log(data)
        }
}

export const CreateAccountViewModel = {
    createUser,
    createAccountSchema
}