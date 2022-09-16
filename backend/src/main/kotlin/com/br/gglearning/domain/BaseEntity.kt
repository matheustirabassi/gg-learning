package com.br.gglearning.domain

import java.util.Date
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.MappedSuperclass
import javax.persistence.PrePersist
import javax.persistence.PreUpdate
import javax.persistence.Temporal
import javax.persistence.TemporalType

/**
 * A entidade base, ela serve para prover um identificador(id), data de criação e modificação.
 *
 * @property id O identificador da entidade.
 * @property creationDate A data de criação da entidade.
 * @property modificationDate A data da última modificação na entidade.
 */
@MappedSuperclass
abstract class BaseEntity protected constructor(
    creationDate: Date? = null,
    modificationDate: Date? = null
) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null

    @Temporal(TemporalType.TIMESTAMP)
    var creationDate: Date?

    @Temporal(TemporalType.TIMESTAMP)
    var modificationDate: Date?

    init {
        this.creationDate = creationDate
        this.modificationDate = modificationDate
    }

    /**
     * Configura a data de modificação, caso a data de criação seja nula, cria uma nova.
     */
    @PrePersist
    @PreUpdate
    fun configureDateCreationAndModification() {
        modificationDate = Date()
        if (creationDate == null) {
            creationDate = Date()
        }
    }
}
