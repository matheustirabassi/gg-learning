package com.br.gglearning.config

import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsRegistry
import org.springframework.security.config.annotation.web.configuration.WebMvcConfigurer
import org.springframework.context.annotation.Configuration

/** 
* Configura o Cors.
*/
@Configuration
class CorsConfiguration: WebMvcConfigurer {

    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT")
    }
}