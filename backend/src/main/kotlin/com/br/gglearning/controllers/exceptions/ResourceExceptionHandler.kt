package com.br.gglearning.controllers.exceptions

import com.br.gglearning.services.exceptions.AuthorizationException
import com.br.gglearning.services.exceptions.DataIntegrityException
import com.br.gglearning.services.exceptions.ObjectNotFoundException
import org.hibernate.service.spi.ServiceException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import java.sql.SQLIntegrityConstraintViolationException
import javax.servlet.http.HttpServletRequest

/**
 * Handler para para manipulação de erros.
 */
@ControllerAdvice
class ResourceExceptionHandler {
    /**
     * Esse método tratatá as exceções desse tipo. A anotação é que define isso. A assinatura desse
     * método é padrão.
     *
     * @ExceptionHandler Define que o método será um tratador de exceções do tipo do parâmetro da
     * anotação.
     */
    @ExceptionHandler(ObjectNotFoundException::class)
    fun objectNotFound(
        objectNotFoundException: ObjectNotFoundException,
        request: HttpServletRequest?
    ): ResponseEntity<StandardError> {
        val err =
            StandardError(
                HttpStatus.NOT_FOUND.value(),
                objectNotFoundException.message,
                System.currentTimeMillis()
            )
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err)
    }

    @ExceptionHandler(DataIntegrityException::class)
    fun dataIntegrity(
        dataIntegrityException: DataIntegrityException,
        request: HttpServletRequest?
    ): ResponseEntity<StandardError> {
        val standardError = StandardError(
            HttpStatus.BAD_REQUEST.value(),
            dataIntegrityException.message,
            System.currentTimeMillis()
        )
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(standardError)
    }

    @ExceptionHandler(MethodArgumentNotValidException::class)
    fun validation(
        methodArgumentNotValidException: MethodArgumentNotValidException,
        request: HttpServletRequest?
    ): ResponseEntity<StandardError> {
        val validationError = ValidationError(
            HttpStatus.BAD_REQUEST.value(),
            "Erro de validação",
            System.currentTimeMillis()
        )
        for (x in methodArgumentNotValidException.bindingResult.fieldErrors) {
            validationError.addError(x.field, x.defaultMessage.toString())
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationError)
    }

    @ExceptionHandler(AuthorizationException::class)
    fun authorization(
        authorizationException: AuthorizationException,
        request: HttpServletRequest?
    ): ResponseEntity<StandardError> {
        val standardError =
            StandardError(
                HttpStatus.FORBIDDEN.value(),
                authorizationException.message,
                System.currentTimeMillis()
            )

        // retorna o erro HTTP correspondente a "acesso negado"
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(standardError)
    }

    @ExceptionHandler(SQLIntegrityConstraintViolationException::class)
    fun duplicateField(
        sqlIntegrityConstraintViolationException: SQLIntegrityConstraintViolationException,
        request: HttpServletRequest?
    ): ResponseEntity<StandardError> {
        val standardError = StandardError(
            HttpStatus.BAD_REQUEST.value(),
            sqlIntegrityConstraintViolationException.message,
            System.currentTimeMillis()
        )

        // retorna o erro HTTP correspondente a "entidade duplicada"
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(standardError)
    }

    @ExceptionHandler(ServiceException::class)
    fun serviceException(
        serviceException: ServiceException,
        request: HttpServletRequest?
    ): ResponseEntity<StandardError> {
        val standardError = StandardError(
            HttpStatus.BAD_REQUEST.value(),
            serviceException.message,
            System.currentTimeMillis()
        )

        // retorna o erro HTTP correspondente a "entidade duplicada"
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(standardError)
    }
}