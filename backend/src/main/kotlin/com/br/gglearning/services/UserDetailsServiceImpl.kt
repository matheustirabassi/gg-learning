package com.br.gglearning.services

import com.br.gglearning.security.UserDetailsImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserDetailsServiceImpl : UserDetailsService {

    @Autowired
    private lateinit var userService: UserService

    override fun loadUserByUsername(email: String): UserDetails {
        if (!userService.emailAlreadyExists(email)) {
            throw UsernameNotFoundException(email)
        }

        val user = userService.findUserByEmail(email)
        return UserDetailsImpl(
            user!!.email,
            user.password,
            listOf(user.typeUser.toString())
        )
    }
}
