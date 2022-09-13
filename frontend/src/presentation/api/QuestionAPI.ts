import * as yup from "yup"
import "../../assets/yup/TraducoesYup"

const createQuizzSchema = yup.object().shape({
    question: yup.string().required(),
    alternative: yup.array().of(yup.string().required()),
})

export interface IInfoQuizzInput {
    question: string
    alternative: string[]
}

const create = async (quizz: IInfoQuizzInput) => {
    console.log(quizz)
}

export const QuizzAPI = {
    create,
    createQuizzSchema
}