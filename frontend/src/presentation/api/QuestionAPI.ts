import { QuestionDTO } from "data/dto/QuestionDTO"

const create = async (data: QuestionDTO[]) => {
    
    console.log(data)
}

export const QuizzAPI = {
    create
}