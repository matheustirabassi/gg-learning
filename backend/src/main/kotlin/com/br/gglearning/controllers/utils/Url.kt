package com.br.gglearning.controllers.utils

import java.net.URLDecoder
import java.nio.charset.StandardCharsets
import java.util.Arrays
import java.util.stream.Collectors

object Url {
    /**
     * Converte lista de ids em formato string para lista de inteiros.
     *
     * @param ids os ids passados como parâmetros.
     * @return a lista de inteiros.
     */
    fun decoreIntList(ids: String): List<Long> {
        return Arrays.stream(ids.split(",".toRegex()).toTypedArray()).map(java.lang.Long::parseLong)
            .collect(Collectors.toList())
    }

    fun decoreParam(param: String?): String {
        return URLDecoder.decode(param, StandardCharsets.UTF_8)
    }
}