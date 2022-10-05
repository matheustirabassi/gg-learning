export class UserDTO {
    name: string
    cpf: string
    email: string
    birthDate: string
    typeUser: string
    userName: string
    password: string

    constructor(name: string, cpf: string, email: string, birthDate: string, typeUser: string, userName: string, password: string){
        this.name = name
        this.cpf = cpf
        this.email = email
        this.birthDate = birthDate
        this.typeUser = typeUser
        this.userName = userName
        this.password = password
    }
}