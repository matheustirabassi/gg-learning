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

const create = async (user: ICreateAccountInput) => {
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