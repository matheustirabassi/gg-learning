import { QuestionDTO } from "./QuestionDTO"

export class QuizzDTO{
    name: string
    questions: QuestionDTO[]

    constructor(name: string, questions: QuestionDTO[]){
        this.name = name
        this.questions = questions
    }
}