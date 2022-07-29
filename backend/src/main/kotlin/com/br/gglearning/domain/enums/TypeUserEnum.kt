package com.br.gglearning.domain.enums

/**
 * O enum que mapeia a permissão do usuário.
 */
enum class TypeUserEnum(val index: Int) {
    /** A permissão de leitor. */
    READER(0),

    /** A permissão de editor. */
    PUBLISHER(1),

    /** A permissão de administrador */
    ADMIN(1);

    /**
     * Busca o id no enum
     *
     * @return O enum, caso seja encontrado.
     */
    fun toEnum(index: Int): TypeUserEnum? {
        return values().find { it.index == index }
    }
}