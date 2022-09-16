package com.br.gglearning.services

import com.br.gglearning.dao.ArticleRepository
import com.br.gglearning.data.ArticleDto
import com.br.gglearning.domain.Article
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
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
    @Autowired
    private lateinit var bCryptPasswordEncoder: BCryptPasswordEncoder

    @Transactional
    fun insert(articleDto: ArticleDto, email: String) {
        val user = userService.findUserByEmail(email) ?: return

        val article: Article = Article(
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
    }
}
