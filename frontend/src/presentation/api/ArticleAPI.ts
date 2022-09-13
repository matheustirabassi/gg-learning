import * as yup from "yup"
import "../../assets/yup/TraducoesYup"

export interface IInfoArticleInput {
    title: string
    content: string
}

const createArticleSchema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
})

const create = async (article: IInfoArticleInput) => {
    console.log(article)
}

export const ArticleAPI = {
    create,
    createArticleSchema
}