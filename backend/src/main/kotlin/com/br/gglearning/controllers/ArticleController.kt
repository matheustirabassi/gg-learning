package com.br.gglearning.controllers

import com.br.gglearning.data.ArticleDto
import com.br.gglearning.services.ArticleService
import lombok.extern.log4j.Log4j2
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import java.net.URI
import javax.validation.Valid

@RestController
@Log4j2
@RequestMapping(value = ["/articles"])
class ArticleController(
    @Autowired
    val articleService: ArticleService
) {

    /**
     * Insere um novo artigo no sistema.
     *
     * @param articleDto O Dto representando o artigo, que deverá ser recebido pelo corpo da requisição.
     * @param email O e-mail do usuário autenticado.
     */
    @PostMapping
    fun insertNewArticle(
        @Valid
        @RequestBody
        articleDto: ArticleDto,

        email: String
    ): ResponseEntity<URI> {
        val article = articleService.insert(articleDto, email)

        val uri: URI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(article.id).toUri()

        return ResponseEntity.created(uri).build()
    }
}
