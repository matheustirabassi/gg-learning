import * as yup from "yup"
import "../../assets/yup/TraducoesYup"

export interface IInfoArticleInput {
    title: string
    content: string
    subtitle: string
    publicationDate?: Date
}

const createArticleSchema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
    subtitle: yup.string().required(),
})

const create = async (article: IInfoArticleInput) => {
    //passar a data manual pq ela n sera passada no Reac Hook Form
    article.publicationDate = new Date()
    console.log(article)
}

export const ArticleAPI = {
    create,
    createArticleSchema
}