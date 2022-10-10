import { Button, Box, FormControl, Grid, Typography } from "@mui/material"
import { ArticleDTO } from "data/dto/ArticleDTO"
import { ArticleAPI } from "presentation/api/ArticleAPI"
import { PageBaseLayout } from "presentation/components/PageBaseLayout/PageBaseLayout"
import { Question } from "presentation/components/Question/Question"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "Routes"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import "../../../assets/yup/TraducoesYup"
import { SubmitHandler, useForm } from "react-hook-form"
import { RHRadioButton } from "presentation/components/FormComponents/RHRadioButton"

interface IQuizzProps {
    id: number
}

const quizzSchema = yup.object().shape({
    alternatives: yup.array().of(yup.string().required()),
})

interface IQuizzAlternatives {
    alternatives: string[]
}

export const QuizzContentView = ({ id }: IQuizzProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [article, setArticle] = useState<ArticleDTO>(new ArticleDTO('', '', '', '', '', []))
    const [answers, setAnswers] = useState([""])
    const navigate = useNavigate()
    const { control, handleSubmit, reset } = useForm<IQuizzAlternatives>({
        resolver: yupResolver(quizzSchema)
    })

    // useEffect(() => {
    //     setIsLoading(true)
    //     ArticleAPI.getById(Number(id))
    //         .then((result) => {
    //             setIsLoading(false)

    //             if (result instanceof Error) {
    //                 alert(result.message)
    //                 navigate(ROUTES.HOME)
    //             } else {
    //                 setArticle(result)
    //                 setIsLoading(false)
    //             }
    //         })

    // }, [id])

    const onSendQuizz: SubmitHandler<IQuizzAlternatives> = (data) => {
        let count = 0
        let total = 0
        data.alternatives.forEach((ans, i) =>{
            total += 1
            if(ans == article.quizzes[0].questions[i].answer){
                count += 1
            }
        })

        alert(`Você acertou ${total}/${count}`)
        reset()
    }
    return (
        <PageBaseLayout>
            <Box display="flex" justifyContent="center" >
                <FormControl sx={{ marginTop: "20px" }}>
                    <Grid container spacing={2} direction="column">
                        {article?.quizzes[0].questions.map((question, index) => {
                            return (
                                <Grid item key={index}>
                                    {/* <RHRadioButton
                                        control={control}
                                        name={`alternatives[${index}]`}
                                        label={question.text}
                                        options={question.alternatives}
                                        disabled={isLoading}
                                    /> */}
                                </Grid>
                            )
                        })}
                        <Grid item >
                            <Question
                                num={1}
                                question="O python é fortemente tipado?"
                                alternatives={["Sim", "Não"]}
                            />

                        </Grid>
                        <Grid item>
                            <Question
                                num={2}
                                question="Qual o comando para receber o valor de uma variável como entrada?"
                                alternatives={["input()", "scanf()", "gets()", "read()"]}
                            />
                        </Grid>
                        <Grid item>
                            <Question
                                num={3}
                                question="Qual o comando para realizar um comentário em python?"
                                alternatives={["<!-- Comentário -->", "--Comentário", "//Comentário", "#Comentário"]}
                            />
                        </Grid>
                    </Grid>

                    <Box display="flex" flexDirection="row" justifyContent="center" marginY={2}>
                        <Button variant="outlined"
                            sx={{
                                border: "2px solid",
                                padding: "10px 50px",
                                marginTop: "35px",
                                marginBottom: "20px"
                            }}
                            onClick={handleSubmit(onSendQuizz)}
                        >
                            <Typography variant="h3">
                                Enviar Quizz
                            </Typography>
                        </Button>
                    </Box>

                </FormControl>
            </Box>
        </PageBaseLayout>
    )
}
