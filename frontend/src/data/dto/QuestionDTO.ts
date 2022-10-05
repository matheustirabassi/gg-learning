export class QuestionDTO {
    question: string
    alternative: string[]
    answer: number

    constructor(question: string, alternative: string[], answer: number) {
        this.question = question
        this.alternative = alternative
        this.answer = answer
    }
}

export class QuizzDTO{
    quizz: QuestionDTO[]

    constructor(quizz: QuestionDTO[]){
        this.quizz = quizz
    }
}