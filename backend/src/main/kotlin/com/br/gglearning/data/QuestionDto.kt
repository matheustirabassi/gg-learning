package com.br.gglearning.data

import javax.validation.constraints.NotEmpty

/**
 * A questao do quiz.
 *
 * @property text A descriçao da questao.
 * @property alternatives As alterativas da questao.
 * @property answer A resposta da questao.
 */
data class QuestionDto(
    @field:NotEmpty(message = "Preenchimento obrigatório")
    var text: String,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var alternatives: List<String>,

    @field:NotEmpty(message = "Preenchimento obrigatório")
    var answer: String
)
