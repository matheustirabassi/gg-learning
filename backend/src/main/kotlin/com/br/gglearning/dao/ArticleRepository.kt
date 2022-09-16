package com.br.gglearning.dao

import com.br.gglearning.domain.Article
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ArticleRepository : JpaRepository<Article, Long>
