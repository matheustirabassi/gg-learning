package com.br.gglearning.config

import com.br.gglearning.security.JwtAuthenticationFilter
import com.br.gglearning.security.util.JwtUtil
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
class SecurityConfig(
    @Autowired
    val environment: Environment,

    @Autowired
    val jwtUtil: JwtUtil
) {

    private final val PUBLIC_MATCHERS = arrayOf("/h2-console/**", "/users/create", "/users/create/**")

    @Bean
    @Throws(Exception::class)
    fun filterChain(http: HttpSecurity): SecurityFilterChain? {
        if (environment.activeProfiles.contains("test")) {
            http.headers().frameOptions().disable()
        }

        http.cors().and().csrf().disable()
        http.authorizeRequests().antMatchers(* PUBLIC_MATCHERS).permitAll()
            .anyRequest().authenticated()
        http.addFilter(JwtAuthenticationFilter(jwtUtil))
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

        return http.build()
    }

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration(
            "/*",
            CorsConfiguration().applyPermitDefaultValues()
        )

        return source
    }

    @Bean
    fun bCryptPasswordEncoder(): BCryptPasswordEncoder {
        return BCryptPasswordEncoder()
    }

    @Bean
    @Throws(java.lang.Exception::class)
    fun authenticationManager(authenticationConfiguration: AuthenticationConfiguration): AuthenticationManager? {
        return authenticationConfiguration.authenticationManager
    }
}
