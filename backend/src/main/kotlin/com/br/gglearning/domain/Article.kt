package com.br.gglearning.domain


import java.util.*
import javax.persistence.*

@Entity
@Table(name = "article")
class Article (
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
    var user: User

    ): BaseEntity()