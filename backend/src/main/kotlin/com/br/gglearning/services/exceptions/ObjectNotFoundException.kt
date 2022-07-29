package com.br.gglearning.services.exceptions

import java.io.Serializable

class ObjectNotFoundException(
    private var msg: String?,
    override var cause: Throwable? = null
) : RuntimeException(msg, cause), Serializable