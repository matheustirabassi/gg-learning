package com.br.gglearning.services.exceptions

class AuthorizationException(
    private var msg: String?,
    override var cause: Throwable? = null
) : RuntimeException(msg, cause)