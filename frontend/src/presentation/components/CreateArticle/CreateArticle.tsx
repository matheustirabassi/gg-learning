import { Box, Button, Card, CardActions, CardContent, CircularProgress } from "@mui/material"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import "../../../assets/yup/TraducoesYup"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { RHTextField } from "../FormComponents/RHTextField"
import { RHTextArea } from "../FormComponents/RHTextArea"
import { ArticleAPI } from "presentation/api/ArticleAPI"
import { ArticleDTO } from "data/dto/ArticleDTO"

const createArticleSchema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
    subtitle: yup.string().required(),
})

export const CreateArticle = () => {
    const { control, handleSubmit } = useForm<ArticleDTO>({
        resolver: yupResolver(createArticleSchema)
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<ArticleDTO> = (data) => {
        setIsLoading(true)
        ArticleAPI.create(data)
    }
    return (
        <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center' sx={{ background: "background.default" }}>
            <Card>
                <CardContent>
                    <Box display='flex' flexDirection='column' gap={2} width={900} padding={2}>
                        <RHTextField
                            name="title"
                            control={control}
                            label="Titulo"
                            type="text"
                            disabled={isLoading}
                        />
                        <RHTextField
                            name="subtitle"
                            control={control}
                            label="Subtitulo"
                            type="text"
                            disabled={isLoading}
                        />
                        <RHTextArea
                            name="content"
                            control={control}
                            label="Conteúdo"
                            type="text"
                            disabled={isLoading}
                            rows={20}
                        />
                    </Box>
                </CardContent>
                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center' marginBottom={1}>
                        <Button
                            variant='contained'
                            disabled={isLoading}
                            onClick={handleSubmit(onSubmit)}
                            endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
                        >
                            Criar artigo
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}