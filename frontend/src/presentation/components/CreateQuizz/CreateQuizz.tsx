import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Card, CardActions, CardContent, CircularProgress } from "@mui/material"
import { IInfoQuizzInput, IQuizz, QuizzAPI } from 'presentation/api/QuestionAPI'
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { RHRadioButton } from '../FormComponents/RHRadioButton'
import { RHTextField } from "../FormComponents/RHTextField"

export const CreateQuizz = () => {
    let questions: IQuizz = {
        quizz: []
    }
    const alt = [0, 1, 2, 3]
    const altCor = ["A", "B", "C", "D"]
    const { handleSubmit, control, reset } = useForm<IInfoQuizzInput>({
        resolver: yupResolver(QuizzAPI.createQuizzSchema)
    })

    const [isLoading, setIsLoading] = useState(false)

    const onCreateQuestion: SubmitHandler<IInfoQuizzInput> = (data) => {
        setIsLoading(true)
        console.log(data)
        reset()
        setIsLoading(false)
    }

    const onSubmit = () => {
        QuizzAPI.create(questions)
    }
    return (
        <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center' sx={{ background: "background.default" }}>
            <Card>
                <CardContent>
                    <Box display='flex' flexDirection='column' gap={2} width={900} padding={2}>
                        <RHTextField
                            name="question"
                            control={control}
                            label="Digite a questão"
                            type="text"
                            disabled={isLoading}
                        />
                        {
                            alt.map((index) => (
                                <RHTextField
                                    key={index}
                                    name={`alternative[${index}]`}
                                    control={control}
                                    label={`Digite a alternativa ${altCor[index]}`}
                                    type="text"
                                    disabled={isLoading}
                                />
                            ))
                        }

                        <RHRadioButton
                            name="correctAlternative"
                            control={control}
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
                            onClick={handleSubmit(onCreateQuestion)}
                            endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
                        >
                            Adicionar pergunta
                        </Button>
                    </Box>
                    <Box width='100%' display='flex' justifyContent='center' marginBottom={1}>
                        <Button
                            variant='contained'
                            disabled={isLoading}
                            onClick={onSubmit}
                            endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
                        >
                            Criar quizz
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box >
    )
}