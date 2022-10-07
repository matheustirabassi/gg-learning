package com.br.gglearning.domain

import java.util.*
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.OneToMany
import javax.persistence.Table

/**
 * A entidade que representa os artigos no sistema.
 *
 * @property title O título do artigo.
 * @property subtitle O subtítulo do artigo.
 * @property content O conteúdo HTML do artigo.
 * @property publicationDate A data de publicação.
 * @property authorName O nome do autor publicador do artigo.
 * @property user O usuário escritor do artigo.
 * @property quizzes Os quizzes associados ao artigo.
 */
@Entity
@Table(name = "article")
class Article(
    @Column(name = "title")
    var title: String,

    @Column(name = "subtitle")
    var subtitle: String = "",

    @Column(name = "content")
    var content: String = "",

    @Column(name = "publicationDate")
    var publicationDate: Date,

    @Column(name = "authorName")
    var authorName: String,

    @ManyToOne
    @JoinColumn(name = "user_id")
    var user: User,

    @OneToMany(
        mappedBy = "article",
        orphanRemoval = true,
        cascade = [CascadeType.ALL]
    )
    var quizzes: MutableList<Quizz>
) : BaseEntity()
