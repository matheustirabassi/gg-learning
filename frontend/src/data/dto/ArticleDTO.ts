import { QuizzDTO } from "./QuestionDTO"

export class ArticleDTO{
    title: string
    content: string
    subtitle: string
    authorName: string
    publicationDate: string
    quizz?: QuizzDTO

    constructor(title: string, content: string, subtitle: string, authorName: string, publicationDate: string){
        this.title = title
        this.content = content
        this.subtitle = subtitle
        this.authorName = authorName
        this.publicationDate = publicationDate
    }
}