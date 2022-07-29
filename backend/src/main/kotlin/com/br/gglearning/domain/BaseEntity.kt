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

@MappedSuperclass
abstract class BaseEntity protected constructor(
    creationDate: Date? = null,
    modificationDate: Date? = null
) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Long? = null

    @Temporal(TemporalType.TIMESTAMP)
    private var creationDate: Date?

    @Temporal(TemporalType.TIMESTAMP)
    private var modificationDate: Date?

    init {
        this.creationDate = creationDate
        this.modificationDate = modificationDate
    }

    @PrePersist
    @PreUpdate
    fun configureDateCreationAndModification() {
        modificationDate = Date()
        if (creationDate == null) {
            creationDate = Date()
        }
    }
}