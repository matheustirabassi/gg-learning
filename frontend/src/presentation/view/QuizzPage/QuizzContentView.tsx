import { Button, Box, FormControl, Grid, Typography, Snackbar, Alert } from "@mui/material"

import { PageBaseLayout } from "presentation/components/PageBaseLayout/PageBaseLayout"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "Routes"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import "../../../assets/yup/TraducoesYup"
import { SubmitHandler, useForm } from "react-hook-form"
import { RHRadioButton } from "presentation/components/FormComponents/RHRadioButton"
import { useDebounce } from "hooks/UseDebounce"
import { QuestionDTO } from "data/dto/QuestionDTO"
import { ArticleAPI } from "data/api/ArticleAPI"
import { useAuthContext } from "contexts/AuthContext"

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
    const [quizz, setQuizz] = useState<QuestionDTO[]>([])
    const [openSnack, setOpenSnack] = useState(false)
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const { debounce } = useDebounce(5000)
    const { control, handleSubmit, reset } = useForm<IQuizzAlternatives>({
        resolver: yupResolver(quizzSchema)
    })
    const { token } = useAuthContext() 

    useEffect(() => {
        setIsLoading(true)
        debounce(() =>
            ArticleAPI.getById(Number(id), token)
                .then((result) => {
                    setIsLoading(false)

                    if (result instanceof Error) {
                        alert(result.message)
                        navigate(ROUTES.HOME)
                    } else {
                        setIsLoading(false)
                        console.log(result.quizzes[0].questions)
                        setQuizz(oldArray => result.quizzes[0].questions)
                        console.log(quizz)
                    }
                })
        )
    }, [id, quizz, debounce, navigate, token])

    const onSendQuizz: SubmitHandler<IQuizzAlternatives> = (data) => {
        setCount(0)
        setTotal(0)
        data.alternatives.forEach((ans, i) => {
            setTotal(oldValue => oldValue+1)

            if (ans === quizz[i].answer) {
                setCount(oldValue => oldValue+1)
            }
        })
        setOpenSnack(true)
        reset()
    }

    const handleCloseSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };

    return (
        <PageBaseLayout>
            <Box display="flex" justifyContent="center" >
                <FormControl sx={{ marginTop: "20px" }}>
                    <Grid container spacing={2} direction="column">
                        {quizz.map((question, index) => {
                            return (
                                <Grid item key={index}>
                                    <RHRadioButton
                                        control={control}
                                        name={`alternatives[${index}]`}
                                        label={question.text}
                                        options={question.alternatives}
                                        disabled={isLoading}
                                        fontWhite={true}
                                    />
                                </Grid>
                            )
                        })}
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
                        <Snackbar open={openSnack} onClose={handleCloseSnack} autoHideDuration={3000}>
                            <Alert severity='success'>
                                Você acertou {count}/{total}
                            </Alert>
                        </Snackbar>
                    </Box>

                </FormControl>
            </Box>
        </PageBaseLayout>
    )
}
