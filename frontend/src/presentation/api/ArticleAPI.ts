import { ArticleDTO } from "data/dto/ArticleDTO"
import { parseDateToString } from "helper/DateHelper"
import { Api } from "presentation/axios/AxiosConfig"

const create = async (article: ArticleDTO) => {
    let currentDate = parseDateToString(new Date())
    article.publicationDate = `${currentDate}`
    article.authorName = "Miguel Sbrissa"
    console.log(article)
    const data = await Api.post('/articles', article)
    console.log(data)
}

const getAll = async () => {
    const data = await Api.get('/articles')

    if(data){
        return data
    }else{
        return new Error('Erro ao listar os registros')
    }
}

const getById = async (id: number) => {
    const data = await Api.get('/articles')

    if(data){
        return data
    }else{
        return new Error('Erro ao listar os registros')
    }
}

export const ArticleAPI = {
    create,
    getAll,
    getById
}