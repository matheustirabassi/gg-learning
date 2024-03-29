package com.br.gglearning.domain

import com.br.gglearning.domain.enums.TypeUserEnum
import java.util.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.OneToMany
import javax.persistence.Table

/**
 * O usuário do site.
 *
 * @property userName O nome do usuário.
 * @property password A senha do usuário.
 * @property name O nome completo.
 * @property cpf O documento.
 * @property email O e-mail usado para o acesso.
 * @property age A idade.
 * @property typeUser O tipo de usuário, mapeado pelo [TypeUserEnum].
 * @property articles Os artigos que foram escritos pelo usuário.
 */
@Entity
@Table(name = "\"user\"")
class User(

    @Column(name = "userName")
    var userName: String = "",

    @Column(name = "password")
    var password: String = "",

    @Column(name = "name")
    var name: String? = null,

    @Column(name = "cpf")
    var cpf: String = "",

    @Column(name = "email", unique = true)
    var email: String = "",

    @Column(name = "birthDate")
    var birthDate: Date? = null,

    @Enumerated(EnumType.ORDINAL)
    var typeUser: TypeUserEnum = TypeUserEnum.READER,

    @OneToMany(mappedBy = "user")
    var articles: MutableList<Article> = emptyList<Article>().toMutableList()
) : BaseEntity()
