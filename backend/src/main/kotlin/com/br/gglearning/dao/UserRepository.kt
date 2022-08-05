package com.br.gglearning.dao

import com.br.gglearning.domain.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, Long> {

    @Query(
        value = "select case when (count(email) > 0) then true else false end " +
            "from User u where u.email = :email"
    )
    fun findIfEmailExists(@Param("email") email: String?): Boolean
}