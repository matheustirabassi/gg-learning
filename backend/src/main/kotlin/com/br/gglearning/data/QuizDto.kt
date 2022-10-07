package com.br.gglearning.data

import java.io.Serializable
import javax.validation.constraints.NotEmpty

/**
 * Dto que represeta o Quiz.
 *
 * @property name O nome do quiz.
 * @property questions A lista de questoes.
 */
data class QuizDto(
    @field:NotEmpty(message = "Preenchimento obrigatório")
    var name: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    val questions: List<QuestionDto>?
) : Serializable {
    constructor() : this(
        "",
        null
    )
}
