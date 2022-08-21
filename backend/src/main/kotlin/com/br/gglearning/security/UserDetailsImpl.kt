package com.br.gglearning.security

import com.br.gglearning.data.UserLoginDto
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import java.io.Serializable

class UserDetailsImpl(
    private var userLogin: UserLoginDto,
    private var authorities: List<String>
) : UserDetails, Serializable {

    override fun getAuthorities(): List<GrantedAuthority> {
        return authorities.map { authority -> SimpleGrantedAuthority(authority) }
    }

    override fun getUsername(): String {
        return userLogin.email.toString()
    }

    override fun getPassword(): String {
        return userLogin.password.toString()
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }
}
