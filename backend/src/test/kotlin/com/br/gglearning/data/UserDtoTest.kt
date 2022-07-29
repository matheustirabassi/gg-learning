package com.br.gglearning.data

import com.br.gglearning.domain.enums.TypeUserEnum
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

class UserDtoTest {

    private lateinit var userDto: UserDto

    @BeforeEach
    fun setUp() {
        userDto = UserDto(
            userName = "Matheus",
            password = "123mudar",
            name = "Matheus",
            cpf = "12345678909",
            email = "matheus@email.com",
            age = "22",
            typeUser = TypeUserEnum.ADMIN
        )
    }

    @Test
    fun `test`() {
    }
}