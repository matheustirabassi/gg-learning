package com.br.gglearning.controllers

import com.br.gglearning.data.UserDto
import com.br.gglearning.services.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.access.annotation.Secured
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import java.net.URI
import javax.validation.Valid

@RestController
@RequestMapping("/users")
class UserController(
    @Autowired
    val userService: UserService
) {

    @Secured("ADMIN")
    @GetMapping
    fun findAll(): ResponseEntity<List<UserDto>> {
        return ResponseEntity.ok(userService.findAllUsers())
    }

    /**
     * Insere um novo usuário no sistema.
     */
    @PostMapping("/create")
    fun insertNewUser(
        @Valid
        @RequestBody
        userDto: UserDto
    ): ResponseEntity<UserDto> {
        val userSaved = userService.insert(userDto)
        val uri: URI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(userSaved.email).toUri()
        return ResponseEntity.created(uri).body(userSaved)
    }

    @GetMapping("/myUser")
    fun getMyUserData() : ResponseEntity<UserDto> {
        return ResponseEntity.ok(userService.getMyUser())
    }
}
