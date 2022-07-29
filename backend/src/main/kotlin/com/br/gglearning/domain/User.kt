package com.br.gglearning.domain

import com.br.gglearning.domain.enums.TypeUserEnum
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.Table

/**
 * O usuário do site.
 */
@Entity
@Table(name = "\"user\"")
class User(

    @Column(name = "userName", unique = true)
    var userName: String = "",

    @Column(name = "password")
    var password: String = "",

    @Column(name = "name")
    var name: String? = null,

    @Column(name = "cpf", unique = true)
    var cpf: String = "",

    @Column(name = "email", unique = true)
    var email: String = "",

    @Column(name = "age")
    var age: String? = null,

    @Enumerated(EnumType.ORDINAL)
    var typeUser: TypeUserEnum = TypeUserEnum.READER
) : BaseEntity()