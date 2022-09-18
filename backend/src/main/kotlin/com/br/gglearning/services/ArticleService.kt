package com.br.gglearning.services

import com.br.gglearning.dao.ArticleRepository
import com.br.gglearning.data.ArticleDto
import com.br.gglearning.domain.Article
import com.br.gglearning.services.exceptions.ObjectNotFoundException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.text.SimpleDateFormat

@Service
class ArticleService(
    @Autowired
    private val articleRepository: ArticleRepository,

    @Autowired
    private val userService: UserService
) {

    /**
     * Insere um novo artigo no sistema.
     *
     * @param articleDto O Dto que representando o artigo.
     * @param email o E-mail do usuário autenticado
     *
     * @throws ObjectNotFoundException Caso não seja encontrado um usuário com o e-mail recebido.
     */
    @Transactional
    fun insert(articleDto: ArticleDto, email: String): Article {
        // TODO: remover autenticação via e-mail e implementar token.
        val user = userService.findUserByEmail(email)
            ?: throw ObjectNotFoundException("O usuário vinculado a este e-mail não existe")

        val article = Article(
            articleDto.title,
            articleDto.subtitle,
            articleDto.content,
            SimpleDateFormat("dd/MM/yyyy").parse(articleDto.publicationDate),
            articleDto.authorName,
            user,
            emptyList()
        )

        articleRepository.save(article)

        user.articles.add(article)

        return article
    }
}
