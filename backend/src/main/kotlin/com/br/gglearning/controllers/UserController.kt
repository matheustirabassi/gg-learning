package com.br.gglearning.controllers

import lombok.extern.log4j.Log4j2
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@Log4j2
@RequestMapping(value = ["/users"])
class UserController {

    @GetMapping(value = ["{id}"])
    fun findById(@PathVariable id: Long): ResponseEntity<String> {
        return ResponseEntity.ok().body("Jeremias")
    }
}