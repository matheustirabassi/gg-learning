package com.br.gglearning.filters

import org.springframework.stereotype.Component
import java.io.IOException
import javax.servlet.Filter
import javax.servlet.FilterChain
import javax.servlet.FilterConfig
import javax.servlet.ServletException
import javax.servlet.ServletRequest
import javax.servlet.ServletResponse
import javax.servlet.http.HttpServletResponse

@Component
class HeaderExposureFilter : Filter {
    @Throws(ServletException::class)
    override fun init(filterConfig: FilterConfig?) {
    }

    @Throws(IOException::class, ServletException::class)
    override fun doFilter(request: ServletRequest?, response: ServletResponse, chain: FilterChain) {
        val res = response as HttpServletResponse
        res.addHeader("access-control-expose-headers", "location")
        chain.doFilter(request, response)
    }

    override fun destroy() {}
}
