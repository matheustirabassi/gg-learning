import { Api } from "config/axios/AxiosConfig"
import { ArticleDTO } from "data/dto/ArticleDTO"
import { parseDateToString } from "helper/DateHelper"

const create = async (article: ArticleDTO) => {
    let currentDate = parseDateToString(new Date())
    article.publicationDate = `${currentDate}`
    article.authorName = "Miguel Sbrissa"
    console.log(article)
    const data = await Api.post('/articles', article)
    console.log(data)
}

const getAll = async (token: string): Promise<ArticleDTO[] | Error> => {
    const data = await Api.get('/articles', {headers: {Authorization: token}})
    console.log(token)
    if (data) {
        return data.data.content
    } else {
        return new Error('Erro ao listar os artigos')
    }
}

const getById = async (id: number, token: string): Promise<ArticleDTO | Error> => {
    try {
        const data = await Api.get(`/articles/${id}`, {headers: {Authorization: token}})

        if (data) {
            return data.data
        } else {
            return new Error('Erro ao consultar artigo.')
        }
    } catch (error) {
        console.error(error)
        return new Error((error as { message: string }).message || 'Erro ao consultar artigo.')
    }
}

export const ArticleAPI = {
    create,
    getAll,
    getById
}
