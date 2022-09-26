package com.br.gglearning.services

import com.br.gglearning.dao.UserRepository
import com.br.gglearning.data.UserDto
import com.br.gglearning.domain.User
import com.br.gglearning.security.UserDetailsImpl
import com.br.gglearning.services.exceptions.DataIntegrityException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.text.SimpleDateFormat

@Service
class UserService(
    @Autowired
    private val userRepository: UserRepository
) {

    private val bCryptPasswordEncoder: BCryptPasswordEncoder = BCryptPasswordEncoder()

    fun getUser(): User? {
        val user = SecurityContextHolder.getContext().authentication.principal as UserDetailsImpl
        return findUserByEmail(user.username)
    }

    /** Busca todos os usuários */
    fun findAllUsers(): List<UserDto> {
        return userRepository.findAll().map { user -> UserDto(user) }
    }

    /** Cria um usuário novo no sistema,
     *
     * @param userDto O Dto que armazena os dados para inserir o usuário no sistema
     * @throws DataIntegrityException caso o e-mail já exista.
     */
    @Transactional
    fun insert(userDto: UserDto): UserDto {
        if (emailAlreadyExists(userDto.email)) {
            throw DataIntegrityException(msg = "O email já existe")
        }

        userDto.password = bCryptPasswordEncoder.encode(userDto.password)

        val user = User()
        userDtoToUser(user, userDto)

        userRepository.save(user)
        return userDto
    }

    fun emailAlreadyExists(email: String): Boolean {
        return userRepository.findIfEmailExists(email)
    }

    fun findUserByEmail(email: String): User? {
        return userRepository.findUserByEmail(email)
    }

    /** Converte de Dto para usuário */
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
        user.birthDate = SimpleDateFormat("dd/MM/yyyy").parse(userDto.birthDate)
    }
}
