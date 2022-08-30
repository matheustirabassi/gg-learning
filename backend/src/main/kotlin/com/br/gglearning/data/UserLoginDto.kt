package com.br.gglearning.data

import com.br.gglearning.domain.User
import java.io.Serializable
import javax.validation.constraints.Email
import javax.validation.constraints.NotEmpty

/**
 * O Dto para autenticação de usuário
 *
 * @property password A senha do usuário.
 * @property email O e-mail do usuário.
 */
class UserLoginDto(
    @field:Email(message = "O e-mail é inválido")
    @field:NotEmpty(message = "Preenchimento obrigatório")
    var email: String? = null,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var password: String? = null
) : Serializable {

    constructor(user: User) : this(
        password = user.password,
        email = user.email
    )
}
