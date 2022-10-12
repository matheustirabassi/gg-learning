package com.br.gglearning.data

import com.br.gglearning.domain.Article
import java.io.Serializable
import javax.validation.constraints.NotEmpty

/**
 * O Dto do artigo.
 *
 * @property id O identificador do artigo.
 * @property title O título do artigo.
 * @property subtitle O subtítulo do artigo.
 * @property content O conteúdo HTML do artigo.
 * @property publicationDate A data de publicação.
 * @property authorName O nome do autor publicador do artigo.
 */
data class ArticleDto(
    var id: Long?,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var title: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var subtitle: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var content: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var publicationDate: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var authorName: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var quizzes: List<QuizDto>?
) : Serializable {
    constructor(article: Article) : this(
        article.id,
        article.title,
        article.subtitle,
        article.content,
        article.publicationDate.toString(),
        article.authorName,
        null
    )

    constructor() : this(
        null,
        "",
        "",
        "",
        "",
        "",
        null
    )
}
