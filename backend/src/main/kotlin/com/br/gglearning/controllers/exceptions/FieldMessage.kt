package com.br.gglearning.controllers.exceptions

import java.io.Serializable

class FieldMessage(
    val fieldName: String,
    val message: String
) : Serializable