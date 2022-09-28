package com.br.gglearning.config

import org.springframework.web.*
import org.springframework.security.*
import org.springframework.context.annotation.*

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