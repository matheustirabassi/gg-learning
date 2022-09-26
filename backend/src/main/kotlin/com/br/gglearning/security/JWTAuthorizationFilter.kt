package com.br.gglearning.security

import com.br.gglearning.security.util.JwtUtil
import lombok.extern.log4j.Log4j2
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Log4j2
class JWTAuthorizationFilter(
    authenticationManager: AuthenticationManager,
    private val jwtUtil: JwtUtil,
    private val userDetailsService: UserDetailsService
) : BasicAuthenticationFilter(authenticationManager) {

    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        chain: FilterChain
    ) {
        val header = request.getHeader("Authorization")

        if (header != null && header.startsWith("Bearer")) {
            val auth: UsernamePasswordAuthenticationToken? = getAuthentication(
                header.substring(7)
            )
            if (auth != null) {
                SecurityContextHolder.getContext().authentication = auth
            }

            chain.doFilter(request, response)
        }
    }

    private fun getAuthentication(
        token: String
    ): UsernamePasswordAuthenticationToken? {
        if (jwtUtil.validToken(token)) {
            val user = userDetailsService.loadUserByUsername(jwtUtil.getUsername(token))
            return UsernamePasswordAuthenticationToken(user, null, user.authorities)
        }

        return null
    }
}
