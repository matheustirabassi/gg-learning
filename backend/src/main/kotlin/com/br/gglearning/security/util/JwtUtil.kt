package com.br.gglearning.security.util

import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import lombok.extern.log4j.Log4j2
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.util.Date

@Log4j2
@Component
class JwtUtil {

    @Value("\${jwt.secret}")
    private lateinit var secretKey: String

    @Value("\${jwt.expiration}")
    private var expiration: Long? = null

    fun generateToken(userName: String): String {
        return Jwts.builder()
            .setSubject(userName)
            .setExpiration(Date(System.currentTimeMillis() + expiration!!))
            .signWith(SignatureAlgorithm.HS512, secretKey.encodeToByteArray())
            .compact()
    }

    fun validToken(token: String): Boolean {
        val claims = getClaims(token)
        if (claims != null) {
            val username = claims.subject
            val expirationDate = claims.expiration
            val now = Date(System.currentTimeMillis())

            if (username == null) {
                return false
            }

            if (expirationDate == null) {
                return false
            }

            if (now.after(expirationDate)) {
                return false
            }

            return true
        }

        return false
    }

    private fun getClaims(token: String): Claims? {
        return try {
            Jwts.parser().setSigningKey(secretKey.encodeToByteArray()).parseClaimsJws(token).body
        } catch (exception: Exception) {
            null
        }
    }

    fun getUsername(token: String): String? {
        val claims = getClaims(token)

        if (claims != null) {
            return claims.subject
        }

        return null
    }
}
