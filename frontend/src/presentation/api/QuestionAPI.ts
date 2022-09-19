import * as yup from "yup"
import "../../assets/yup/TraducoesYup"

const createQuizzSchema = yup.object().shape({
    question: yup.string().required(),
    alternative: yup.array().of(yup.string().required()),
})

export interface IInfoQuizzInput {
    question: string
    alternative: string[]
    correctAlternative: number
}

export interface IQuizz{
    quizz: IInfoQuizzInput[]
}

const create = async (data: IQuizz) => {
    console.log(data)
}

export const QuizzAPI = {
    create,
    createQuizzSchema
}