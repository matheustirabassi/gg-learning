package com.br.gglearning.services

import com.br.gglearning.dao.UserRepository
import com.br.gglearning.data.UserDto
import com.br.gglearning.domain.enums.TypeUserEnum
import com.br.gglearning.services.exceptions.DataIntegrityException
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Assertions.assertThrows
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.anyString
import org.mockito.Mockito.`when`
import org.mockito.MockitoAnnotations

class UserServiceTest {

    @Mock
    private lateinit var userRepository: UserRepository

    @InjectMocks
    private lateinit var userService: UserService

    @BeforeEach
    fun setUp() {
        MockitoAnnotations.openMocks(this)
    }

    // region insert tests

    @Test
    fun `insertTest caso o e-mail já exista, deve ser lançada uma DataIntegrityException`() {
        `when`(userRepository.findIfEmailExists(anyString())).thenReturn(true)

        val userDto = UserDto(
            "Matheus",
            "123mudar",
            "Matheus",
            "12345678909",
            "matheus@email.com",
            "01/01/2000",
            TypeUserEnum.READER
        )
        val exception: DataIntegrityException = assertThrows(
            DataIntegrityException::class.java
        ) {
            userService.insert(userDto)
        }

        assertThat(exception.message, `is`("O email já existe"))
    }

    @Test
    fun `insertTest caso o e-mail não exista, o usuário deve ser salvo`() {
        `when`(userRepository.findIfEmailExists(anyString())).thenReturn(false)

        val userDto = UserDto(
            "Matheus",
            "123mudar",
            "Matheus",
            "12345678909",
            "matheus@email.com",
            "01/01/2000",
            TypeUserEnum.READER
        )

        assertThat(userDto, `is`(userService.insert(userDto)))
    }

    // endregion
}
