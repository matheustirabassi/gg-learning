import {  QuizzDTO } from "./QuizzDTO"

export class ArticleDTO{
    id?: number
    title: string
    content: string
    subtitle: string
    authorName: string
    publicationDate: string
    quizzes: QuizzDTO[]

    constructor(title: string, content: string, subtitle: string, authorName: string, publicationDate: string, quizzes: QuizzDTO[]){
        this.title = title
        this.content = content
        this.subtitle = subtitle
        this.authorName = authorName
        this.publicationDate = publicationDate
        this.quizzes = quizzes
    }
}