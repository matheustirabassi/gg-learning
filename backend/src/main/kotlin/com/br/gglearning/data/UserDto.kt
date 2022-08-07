package com.br.gglearning.data

import com.br.gglearning.domain.User
import com.br.gglearning.domain.enums.TypeUserEnum
import org.hibernate.validator.constraints.br.CPF
import java.io.Serializable
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotEmpty
import javax.validation.constraints.NotNull

/**
 * O Dto para inserção de usuário
 *
 * @property userName O nome do usuário.
 * @property password A senha do usuário.
 * @property name O nome do usuário.
 * @property cpf O documento CPF do usuário.
 * @property email O e-mail do usuário.
 * @property age A idade do usuário.
 * @property typeUser O tipo de usuário, mapeado pelo [TypeUserEnum].
 */
data class UserDto(
    @field:NotBlank
    @field:NotEmpty(message = "Preenchimento obrigatório")
    var userName: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var password: String,

    var name: String?,

    @field:CPF(message = "O CPF é inválido")
    @field:NotEmpty(message = "Preenchimento obrigatório")
    var cpf: String,

    @field:Email(message = "O e-mail é inválido")
    @field:NotEmpty(message = "Preenchimento obrigatório")
    var email: String,

    var age: String?,

    @field:NotNull(message = "Preenchimento obrigatório")
    var typeUser: TypeUserEnum
) : Serializable {

    constructor(user: User) : this(
        user.userName,
        user.password,
        user.name,
        user.cpf,
        user.email,
        user.age,
        user.typeUser
    )
}