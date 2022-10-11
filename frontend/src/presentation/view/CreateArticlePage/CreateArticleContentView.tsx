import { Alert, Box, Button, Card, CardActions, CardContent, CircularProgress, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import "../../../assets/yup/TraducoesYup"
import { ArticleDTO } from "data/dto/ArticleDTO";
import { ArticleAPI } from "presentation/api/ArticleAPI";
import { RHTextArea } from "presentation/components/FormComponents/RHTextArea";
import { RHTextField } from "presentation/components/FormComponents/RHTextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { QuestionDTO } from "data/dto/QuestionDTO";
import { QuizzDTO } from "data/dto/QuizzDTO";
import { RHRadioButton } from "presentation/components/FormComponents/RHRadioButton";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "hooks/UseDebounce";

const createArticleSchema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
    subtitle: yup.string().required(),
})

const createQuizzSchema = yup.object().shape({
    text: yup.string().required(),
    alternatives: yup.array().of(yup.string().required()),
    answer: yup.string().required(),
})

export const CreateArticleContentView = () => {
    const [openSnackQuestion, setOpenSnackQuestion] = useState(false)
    const [openSnackQuizz, setOpenSnackQuizz] = useState(false)
    const { debounce } = useDebounce(1500, false)
    const navigate = useNavigate()
    //Article
    const { control: controlArticle, handleSubmit: handleSubmitArticle, getValues } = useForm<ArticleDTO>({
        resolver: yupResolver(createArticleSchema)
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<ArticleDTO> = (data) => {
        setIsLoading(true)

    }

    //Quizz
    const { handleSubmit: handleSubmitQuizz, control: controlQuizz, reset: resetQuizz } = useForm<QuestionDTO>({
        resolver: yupResolver(createQuizzSchema)
    })
    const alt = [0, 1, 2, 3]
    const altCor = ["A", "B", "C", "D"]

    const [question, setQuestion] = useState<QuestionDTO[]>([])
    const handleQuizz = (data: QuestionDTO) => {
        setQuestion(oldArray => [...oldArray, data])
    }

    const handleCloseSnackQuestion = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackQuestion(false);
    };

    const handleCloseSnackQuizz = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackQuizz(false);
    };

    const onCreateQuestion: SubmitHandler<QuestionDTO> = (data) => {
        handleQuizz(data)
        setOpenSnackQuestion(true)
        resetQuizz()
    }

    const onSubmitQuizz = () => {
        let quizz = new QuizzDTO(getValues("title"), question)
        let finalArticle = new ArticleDTO(getValues("title"), getValues("content"), getValues("subtitle"), "", "", [quizz])
        setOpenSnackQuizz(true)
        debounce(() => {
            ArticleAPI.create(finalArticle)
            navigate("/")
        })
    }

    return (
        <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center' flexDirection="column" sx={{ background: "background.default" }}>
            { /**Article*/}
            <Box marginTop={2}>
                <Card>
                    <CardContent>
                        <Box display='flex' flexDirection='column' gap={2} width={900} padding={2}>
                            <Typography
                                variant='h3'
                            >Adicione as informações do artigo</Typography>
                            <RHTextField
                                name="title"
                                control={controlArticle}
                                label="Titulo"
                                type="text"
                                disabled={isLoading}
                            />
                            <RHTextField
                                name="subtitle"
                                control={controlArticle}
                                label="Subtitulo"
                                type="text"
                                disabled={isLoading}
                            />
                            <RHTextArea
                                name="content"
                                control={controlArticle}
                                label="Conteúdo"
                                type="text"
                                disabled={isLoading}
                                rows={20}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            { /**Quizz*/}
            <Box marginTop={2}>
                <Card>
                    <CardContent>
                        <Box display='flex' flexDirection='column' gap={2} width={900} padding={2}>
                            <Typography
                                variant='h3'
                            >Adicione as informações do quizz </Typography>
                            <RHTextField
                                name="text"
                                control={controlQuizz}
                                label="Digite a questão"
                                type="text"
                                disabled={isLoading}
                            />
                            {
                                alt.map((index) => (
                                    <RHTextField
                                        key={index}
                                        name={`alternatives[${index}]`}
                                        control={controlQuizz}
                                        label={`Digite a alternativa ${altCor[index]}`}
                                        type="text"
                                        disabled={isLoading}
                                    />
                                ))
                            }

                            <RHRadioButton
                                name="answer"
                                control={controlQuizz}
                                label="Escolha qual alternativa será a correta"
                                disabled={isLoading}
                                options={altCor}
                            />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box width='100%' display='flex' justifyContent='center' marginBottom={1}>
                            <Button
                                variant='contained'
                                disabled={isLoading}
                                onClick={handleSubmitQuizz(onCreateQuestion)}
                                endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
                            >
                                Adicionar pergunta
                            </Button>
                            <Snackbar open={openSnackQuestion} onClose={handleCloseSnackQuestion} autoHideDuration={1500}>
                                <Alert severity='success'>
                                    Pergunta criada com sucesso
                                </Alert>
                            </Snackbar>
                        </Box>
                        <Box width='100%' display='flex' justifyContent='center' marginBottom={1}>
                            <Button
                                variant='contained'
                                disabled={isLoading}
                                onClick={onSubmitQuizz}
                                endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
                            >
                                Criar artigo
                            </Button>
                            <Snackbar open={openSnackQuizz} onClose={handleCloseSnackQuizz} autoHideDuration={1500}>
                                <Alert severity='success'>
                                    Artigo criado com sucesso
                                </Alert>
                            </Snackbar>
                        </Box>
                    </CardActions>
                </Card>
            </Box>

        </Box>
    )
}