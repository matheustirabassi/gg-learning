package com.br.gglearning.controllers.exceptions

import java.io.Serializable

class ValidationError(
    status: Int?,
    msg: String?,
    timeStamp: Long,
    var errors: MutableList<FieldMessage> = ArrayList()
) : StandardError(status, msg, timeStamp), Serializable {

    fun addError(fieldName: String, message: String) {
        errors.add(FieldMessage(fieldName, message))
    }
}