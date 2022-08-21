package com.br.gglearning.services

import com.br.gglearning.data.UserLoginDto
import com.br.gglearning.security.UserDetailsImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException

class UserDetailsServiceImpl(
    @Autowired
    private val userService: UserService
) : UserDetailsService {

    override fun loadUserByUsername(email: String): UserDetails {
        if (userService.emailAlreadyExists(email)) {
            throw UsernameNotFoundException(email)
        }

        val user = userService.findUserByEmail(email)
        return UserDetailsImpl(
            UserLoginDto(user),
            listOf(user.typeUser.toString())
        )
    }
}
