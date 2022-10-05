export class QuestionDTO {
    text: string
    alternatives: string[]
    answer: string

    constructor(text: string, alternatives: string[], answer: string) {
        this.text = text
        this.alternatives = alternatives
        this.answer = answer
    }
}