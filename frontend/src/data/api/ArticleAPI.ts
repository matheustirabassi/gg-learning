import { ArticleDTO } from "data/dto/ArticleDTO"
import { Api } from "config/axios/AxiosConfig"

const create = async (article: ArticleDTO) => {
    let currentDate = new Date()
    article.publicationDate = `${currentDate.getUTCDate().toString()}/${currentDate.getUTCMonth().toString()}/${currentDate.getUTCFullYear().toString()}`
    article.authorName = "Miguel Sbrissa"
    console.log(article)
    const data = await Api.post('/articles/create', {
        "title": article.title,
        "subtitle": article.subtitle,
        "content": article.content,
        "publicationDate": article.publicationDate,
        "authorName": article.authorName,
    })
    console.log(data)
}

export const ArticleAPI = {
    create
}
