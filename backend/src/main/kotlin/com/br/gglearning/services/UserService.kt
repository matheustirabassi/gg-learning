package com.br.gglearning.services

import com.br.gglearning.dao.UserRepository
import com.br.gglearning.data.UserDto
import com.br.gglearning.domain.User
import com.br.gglearning.services.exceptions.DataIntegrityException
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class UserService(
    private val userRepository: UserRepository
) {

    /** Busca todos os usuários */
    fun findAllUsers(): List<UserDto> {
        return userRepository.findAll().map { user -> UserDto(user) }
    }

    @Transactional
    fun insert(userDto: UserDto): UserDto {
        if (emailAlreadyExists(userDto.email)) {
            throw DataIntegrityException(msg = "O email já existe")
        }

        val user = User()
        userDtoToUser(user, userDto)

        userRepository.save(user)
        return userDto
    }

    fun emailAlreadyExists(email: String): Boolean {
        return userRepository.findIfEmailExists(email)
    }

    private fun userDtoToUser(
        user: User,
        userDto: UserDto
    ) {
        user.userName = userDto.userName
        user.password = userDto.password
        user.cpf = userDto.cpf
        user.email = userDto.email
        user.typeUser = userDto.typeUser
        user.name = userDto.name
        user.age = userDto.age
    }
}