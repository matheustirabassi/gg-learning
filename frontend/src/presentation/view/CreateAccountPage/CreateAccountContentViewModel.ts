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

const createUser = (user: UserDTO) => {
    UserAPI.create(user)
}

export const CreateAccountViewModel = {
    createUser,
    createAccountSchema
}
