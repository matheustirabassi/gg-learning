export class QuestionDTO {
    question: string
    alternative: string[]
    correctAlternative: number

    constructor(question: string, alternative: string[], correctAlternative: number) {
        this.question = question
        this.alternative = alternative
        this.correctAlternative = correctAlternative
    }
}

export class QuizzDTO{
    quizz: QuestionDTO[]

    constructor(quizz: QuestionDTO[]){
        this.quizz = quizz
    }
}