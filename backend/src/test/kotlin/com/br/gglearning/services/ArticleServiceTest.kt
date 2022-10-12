package com.br.gglearning.services

import com.br.gglearning.dao.ArticleRepository
import com.br.gglearning.dao.UserRepository
import com.br.gglearning.data.ArticleDto
import com.br.gglearning.data.QuestionDto
import com.br.gglearning.data.QuizDto
import com.br.gglearning.domain.Article
import com.br.gglearning.domain.Question
import com.br.gglearning.domain.Quizz
import com.br.gglearning.domain.User
import com.br.gglearning.services.exceptions.ObjectNotFoundException
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Assertions.assertAll
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.mockito.ArgumentMatchers.anyLong
import org.mockito.ArgumentMatchers.anyString
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.`when`
import org.mockito.MockitoAnnotations
import java.text.SimpleDateFormat
import java.util.*

internal class ArticleServiceTest {

    @Mock
    private lateinit var articleRepository: ArticleRepository

    @Mock
    private lateinit var userService: UserService

    @Mock
    private lateinit var userRepository: UserRepository

    @InjectMocks
    private lateinit var articleService: ArticleService

    private lateinit var articleDto: ArticleDto

    private lateinit var article: Article

    @BeforeEach
    fun setUp() {
        MockitoAnnotations.openMocks(this)

        articleDto = ArticleDto(
            1L,
            "Jeremias",
            "Descrição sobre Jeremias",
            "Conteúdo sobre Jeremias",
            "10/11/2022",
            "Jeremias, o autor",
            null
        )
        val question = Question(
            "Pergunta 01",
            mutableListOf("a", "b", "c"),
            "c"
        )

        val quizz = Quizz(
            "Perguntas",
            null,
            mutableListOf(question)
        )

        question.quizz = quizz

        article = Article(
            "Progração orientada a objeto",
            "Aprenda a programar em Java",
            "Content",
            SimpleDateFormat("dd/mm/yyyy").parse("11/10/2022"),
            "Jeremias",
            null,
            listOf(quizz) as MutableList<Quizz>
        )
        quizz.article = article
    }

    // region insert tests

    @Test
    fun insert_EmailNotFound_ObjectNotFoundException() {
        `when`(userService.findUserByEmail(anyString())).thenReturn(null)

        val articleDto = ArticleDto(
            1,
            "Progração orientada a objeto",
            "Aprenda a programar em Java",
            "<html> </html>",
            "17/09/2022",
            "Jeremias",
            emptyList()
        )

        val exception: ObjectNotFoundException = assertThrows {
            articleService.insert(
                articleDto
            )
        }

        assertEquals("O usuário vinculado a este e-mail não existe", exception.message)
    }

    @Test
    fun insert_AllValid_Success() {
        val user = User()
        `when`(userService.getUser()).thenReturn(user)
        `when`(userService.findUserByEmail(anyString())).thenReturn(user)

        val questionDto = QuestionDto(
            "Jeremias",
            listOf("a", "b", "c"),
            "c"
        )

        val quizDto = QuizDto(
            "Quiz jeremias",
            listOf(questionDto)
        )

        val articleDto = ArticleDto(
            1,
            "Progração orientada a objeto",
            "Aprenda a programar em Java",
            "<html> </html>",
            "17/09/2022",
            "Jeremias",
            mutableListOf(quizDto)
        )

        articleService.insert(
            articleDto
        )

        val article = user.articles[0]
        val quiz = article.quizzes[0]
        val question = quiz.questions?.get(0)

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
            { assertEquals(articleDto.authorName, article.authorName) },
            { assertEquals(quizDto.name, quiz.name) },
            {
                assertEquals(
                    questionDto.text,
                    questionDto.text
                )
            },
            {
                assertEquals(
                    questionDto.answer,
                    question!!.answer
                )
            },
            {
                assertEquals(questionDto.alternatives, question!!.alternatives)
            }
        )
    }

    // endregion

    // region findArticleById tests
    @Test
    fun `Caso a busca pelo identificador do artigo retorne um resultado, o Dto deve ser convertido corretamente`() {
        `when`(articleRepository.findById(anyLong())).thenReturn(Optional.of(article))

        val article = articleService.findArticleById(1L)

        assertThat(article.title, `is`("Progração orientada a objeto"))
        assertThat(article.subtitle, `is`("Aprenda a programar em Java"))
        assertThat(article.content, `is`("Content"))
        assertThat(article.publicationDate, `is`("11/01/2022"))
        assertThat(article.authorName, `is`("Jeremias"))

        val quizDto = article.quizzes!![0]
        assertThat(quizDto.name, `is`("Perguntas"))

        val questionDto = quizDto.questions!![0]
        assertThat(questionDto.text, `is`("Pergunta 01"))
        assertThat(questionDto.alternatives, `is`(listOf("a", "b", "c")))
        assertThat(questionDto.answer, `is`("c"))
    }

    // endregion
}
