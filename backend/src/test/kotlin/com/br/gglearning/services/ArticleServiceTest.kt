package com.br.gglearning.services

import com.br.gglearning.dao.ArticleRepository
import com.br.gglearning.data.ArticleDto
import com.br.gglearning.domain.User
import com.br.gglearning.services.exceptions.ObjectNotFoundException
import org.junit.jupiter.api.Assertions.assertAll
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertThrows
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.mockito.ArgumentMatchers.anyString
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.`when`
import org.mockito.MockitoAnnotations
import java.text.SimpleDateFormat

internal class ArticleServiceTest {

    @Mock
    private lateinit var articleRepository: ArticleRepository

    @Mock
    private lateinit var userService: UserService

    @InjectMocks
    private lateinit var articleService: ArticleService

    @BeforeEach
    fun setUp() {
        MockitoAnnotations.openMocks(this)
    }

    // region insert tests

    @Test
    fun insert_EmailNotFound_ObjectNotFoundException() {
        `when`(userService.findUserByEmail(anyString())).thenReturn(null)

        val articleDto = ArticleDto(
            "Progração orientada a objeto",
            "Aprenda a programar em Java",
            "<html> </html>",
            "17/09/2022",
            "Jeremias"
        )
        val exception: ObjectNotFoundException = assertThrows {
            articleService.insert(
                articleDto,
                "jeremias@email.com"
            )
        }

        assertEquals("O usuário vinculado a este e-mail não existe", exception.message)
    }

    @Test
    fun insert_AllValid_Success() {
        val user = User()
        `when`(userService.findUserByEmail(anyString())).thenReturn(user)

        val articleDto = ArticleDto(
            "Progração orientada a objeto",
            "Aprenda a programar em Java",
            "<html> </html>",
            "17/09/2022",
            "Jeremias"
        )
        articleService.insert(
            articleDto,
            "jeremias@email.com"
        )

        val article = user.articles[0]

        assertAll(
            { assertEquals(articleDto.title, article.title) },
            { assertEquals(articleDto.subtitle, article.subtitle) },
            { assertEquals(articleDto.content, article.content) },
            {
                assertEquals(
                    SimpleDateFormat("dd/MM/yyyy").parse(articleDto.publicationDate),
                    article.publicationDate
                )
            },
            { assertEquals(articleDto.authorName, article.authorName) }
        )
    }

    // endregion
}
