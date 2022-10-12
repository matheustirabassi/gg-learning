package com.br.gglearning.services

import com.br.gglearning.dao.ArticleRepository
import com.br.gglearning.dao.UserRepository
import com.br.gglearning.data.ArticleDto
import com.br.gglearning.domain.Article
import com.br.gglearning.domain.Quizz
import com.br.gglearning.domain.User
import com.br.gglearning.services.exceptions.ObjectNotFoundException
import org.modelmapper.ModelMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.text.SimpleDateFormat

@Service
class ArticleService(
    @Autowired
    private val articleRepository: ArticleRepository,

    @Autowired
    private val userService: UserService,

    @Autowired
    private val userRepository: UserRepository
) {

    /**
     * Insere um novo artigo no sistema.
     *
     * @param articleDto O Dto que representando o artigo.
     *
     * @throws ObjectNotFoundException Caso não seja encontrado um usuário com o e-mail recebido.
     */
    @Transactional
    fun insert(articleDto: ArticleDto): Article {
        val user = userService.getUser()
            ?: throw ObjectNotFoundException("O usuário vinculado a este e-mail não existe")

        val article = parseDtoToEntity(articleDto, user)

        user.articles.add(article)

        articleRepository.save(article)

        return article
    }

    /**
     * Busca todos os artigos do sistema
     *
     * @return A lista com todos os arquivos paginanda
     */
    fun findAllArticles(pageable: Pageable): Page<ArticleDto> {
        return articleRepository.findAll(pageable).map { article -> ArticleDto(article) }
    }

    /**
     * Converte de Dto para para a entidade artigo.
     *
     * @param articleDto O Dto que representa o artigo.
     * @param user O usuário autenticado.
     * * @return O artigo com os dados atualizados.
     */
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
            emptyList<Quizz>().toMutableList()
        )

        val modelMapper = ModelMapper()
        article.quizzes = articleDto.quizzes?.map { quiz ->
            run {
                val quizMapped = modelMapper.map(quiz, Quizz::class.java)
                quizMapped.article = article
                quizMapped.questions?.map { question -> question.quizz = quizMapped }
                return@map quizMapped
            }
        } as MutableList<Quizz>

        return article
    }

    /**
     * Atualiza o artigo com base no identificador.
     *
     * @param articleId O identificador do artigo.
     * @param articleDto O dto a ser usado para atualizar o artigo.
     *
     * @return O artigo buscado.
     */
    @Transactional
    fun updateArticle(articleId: Long, articleDto: ArticleDto) {
        val article = articleRepository.findById(articleId).get()

        article.content = articleDto.content
        article.title = articleDto.title
        article.subtitle = articleDto.subtitle
    }

    /**
     * Busca o artigo com base no identificador.
     *
     * @param articleId O identificador do artigo.
     * @return O artigo buscado.
     */
    fun findArticleById(articleId: Long): ArticleDto {
        val article = articleRepository.findById(articleId).get()

        val articleDto = ModelMapper().map(article, ArticleDto::class.java)
        articleDto.publicationDate = SimpleDateFormat("dd/MM/yyyy").format(article.publicationDate)
        return articleDto
    }
}
