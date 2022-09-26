package com.br.gglearning.security

import com.br.gglearning.data.UserLoginDto
import com.br.gglearning.security.util.JwtUtil
import com.br.gglearning.services.exceptions.AuthorizationException
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.AuthenticationException
import org.springframework.security.web.authentication.AuthenticationFailureHandler
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import java.io.IOException
import java.util.Date
import javax.servlet.FilterChain
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

class JwtAuthenticationFilter(
    private var auth: AuthenticationManager,
    private val jwtUtil: JwtUtil
) : UsernamePasswordAuthenticationFilter() {

    init {
        setAuthenticationFailureHandler(JWTAuthenticationFailureHandler())
    }

    @Throws(AuthenticationException::class)
    override fun attemptAuthentication(
        request: HttpServletRequest,
        response: HttpServletResponse?
    ): Authentication {
        return try {
            val credentials: UserLoginDto = ObjectMapper()
                .readValue(
                    request.inputStream,
                    UserLoginDto::class.java
                )

            val authenticationToken = UsernamePasswordAuthenticationToken(
                credentials.email,
                credentials.password,
                emptyList()
            )

            auth.authenticate(authenticationToken)
        } catch (ioException: IOException) {
            throw AuthorizationException("erro")
        }
    }

    @Throws(IOException::class, ServletException::class)
    override fun successfulAuthentication(
        request: HttpServletRequest,
        response: HttpServletResponse,
        chain: FilterChain?,
        auth: Authentication
    ) {
        val username: String = (auth.principal as UserDetailsImpl).username
        val token: String = jwtUtil.generateToken(username)
        response.addHeader("Authorization", "Bearer $token")
    }

    private class JWTAuthenticationFailureHandler : AuthenticationFailureHandler {
        @Throws(IOException::class, ServletException::class)
        override fun onAuthenticationFailure(
            request: HttpServletRequest,
            response: HttpServletResponse,
            exception: AuthenticationException
        ) {
            response.status = 401
            response.contentType = "application/json"
            response.writer.append(json())
        }

        private fun json(): String {
            val date: Long = Date().time

            return (
                "{\"timestamp\": " + date + ", " +
                    "\"status\": 401, " +
                    "\"error\": \"Não autorizado\", " +
                    "\"message\": \"Email ou senha inválidos\", " +
                    "\"path\": \"/login\"}"
                )
        }
    }
}
