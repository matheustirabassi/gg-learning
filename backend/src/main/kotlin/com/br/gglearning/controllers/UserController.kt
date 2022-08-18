package com.br.gglearning.controllers

import com.br.gglearning.data.UserDto
import com.br.gglearning.services.UserService
import lombok.extern.log4j.Log4j2
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

@RestController
@Log4j2
@RequestMapping(value = ["/users"])
class UserController(
    val userService: UserService
) {

    @GetMapping
    fun findAll(): ResponseEntity<List<UserDto>> {
        return ResponseEntity.ok(userService.findAllUsers())
    }

    /**
     * Insere um novo usuário no sistema.
     */
    @PostMapping(value = ["/create"])
    fun insertNewUser(
        @Valid
        @RequestBody
        userDto: UserDto
    ): ResponseEntity<UserDto> {
        return ResponseEntity.ok().body(userService.insert(userDto))
    }
}