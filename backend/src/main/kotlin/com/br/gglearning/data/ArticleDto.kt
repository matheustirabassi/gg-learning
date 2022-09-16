package com.br.gglearning.data

import com.br.gglearning.domain.Article
import java.io.Serializable
import java.text.SimpleDateFormat
import javax.validation.constraints.NotEmpty

/**
 * O Dto do artigo.
 *
 * @property title O título do artigo.
 * @property subtitle O subtítulo do artigo.
 * @property content O conteúdo HTML do artigo.
 * @property publicationDate A data de publicação.
 * @property authorName O nome do autor publicador do artigo.
 */
data class ArticleDto(

    @field:NotEmpty(message = "Preenchimento obrigatório")
    val title: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    val subtitle: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    val content: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    val publicationDate: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    val authorName: String
) : Serializable {

    constructor(article: Article) : this(
        article.title,
        article.subtitle,
        article.content,
        SimpleDateFormat("dd/MM/yyyy").format(article.publicationDate),
        article.authorName
    )
}
