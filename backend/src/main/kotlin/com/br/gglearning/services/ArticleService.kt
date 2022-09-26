package com.br.gglearning.services

import com.br.gglearning.dao.ArticleRepository
import com.br.gglearning.data.ArticleDto
import com.br.gglearning.domain.Article
import com.br.gglearning.domain.Quizz
import com.br.gglearning.domain.User
import com.br.gglearning.services.exceptions.ObjectNotFoundException
import org.modelmapper.ModelMapper
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
    fun insert(articleDto: ArticleDto): Article {
        val user = userService.getUser()
            ?: throw ObjectNotFoundException("O usuário vinculado a este e-mail não existe")

        val article = parseDtoToEntity(articleDto, user)

        articleRepository.save(article)

        user.articles.add(article)

        return article
    }

    private fun parseDtoToEntity(
        articleDto: ArticleDto,
        user: User
    ): Article {
        val article = Article(
            articleDto.title,
            articleDto.subtitle,
            articleDto.content,
            SimpleDateFormat("dd/MM/yyyy").parse(articleDto.publicationDate),
            articleDto.authorName,
            user,
            emptyList()
        )

        val modelMapper = ModelMapper()
        article.quizzes = articleDto.quizzes.map { quiz ->
            run {
                val quizMapped = modelMapper.map(quiz, Quizz::class.java)
                quizMapped.article = article
                quizMapped.questions.map { question -> question.quizz = quizMapped }
                return@map quizMapped
            }
        }

        return article
    }
}
