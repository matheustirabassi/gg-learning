package com.br.gglearning.domain

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToOne
import javax.persistence.OneToMany
import javax.persistence.Table

/**
 * O quiz relacionado ao artigo com perguntas e respostas.
 *
 * @property name O nome do quizz.
 * @property article O artigo associado ao quizz.
 * @property questions As questões do quizz.
 */
@Entity
@Table(name = "quizz")
class Quizz(
    @Column(name = "name")
    var name: String,

    @ManyToOne
    @JoinColumn(name = "article_id")
    var article: Article,

    @OneToMany
    @JoinTable(name = "quizz_questions")
    var questions: List<Question>
) : BaseEntity()
