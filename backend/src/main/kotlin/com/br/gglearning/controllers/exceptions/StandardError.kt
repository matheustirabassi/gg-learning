package com.br.gglearning.controllers.exceptions

import java.io.Serializable

open class StandardError(
    val status: Int? = null,
    val msg: String? = null,
    val timeStamp: Long? = null
) : Serializable