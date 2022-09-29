package com.br.gglearning.controllers

import com.br.gglearning.data.ArticleDto
import com.br.gglearning.services.ArticleService
import lombok.extern.log4j.Log4j2
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
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
     */
    @Secured("ADMIN", "PUBLISHER")
    @PostMapping
    fun insertNewArticle(
        @Valid
        @RequestBody
        articleDto: ArticleDto
    ): ResponseEntity<URI> {
        val article = articleService.insert(articleDto)

        val uri: URI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(article.id).toUri()

        return ResponseEntity.created(uri).build()
    }

    /**
     * Busca todos os artigos do sistema.
     */
    @GetMapping
    fun findAllArticles(pageable: Pageable): ResponseEntity<Page<ArticleDto>> {
        return ResponseEntity.ok().body(articleService.findAllArticles(pageable))
    }
}
