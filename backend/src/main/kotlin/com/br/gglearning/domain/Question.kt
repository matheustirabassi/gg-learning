package com.br.gglearning.domain

import javax.persistence.CollectionTable
import javax.persistence.Column
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

/**
 * A questão relacionada ao quizz.
 *
 * @property text A pergunta da questão.
 * @property alternatives As possíveis escolhas de respostas.
 * @property answer A resposta da pergunta.
 * @property quizz O quizz da pergunta.
 */
@Entity
@Table(name = "question")
class Question(
    @Column(name = "text")
    var text: String,

    @ElementCollection
    @CollectionTable(name = "question_alternatives")
    var alternatives: MutableList<String>,

    @Column(name = "answer")
    var answer: String,

    @ManyToOne
    @JoinColumn(name = "quizz_id")
    var quizz: Quizz? = null
) : BaseEntity()
