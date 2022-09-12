import { Box, Card, CardContent } from "@mui/material"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import "../../../assets/yup/TraducoesYup"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { RHTextField } from "../FormComponents/RHTextField"
import { RHTextArea } from "../FormComponents/RHTextArea"

const createArticleSchema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
})

interface IInfoArticleInput {
    title: string
    content: string
}

export const CreateArticle = () => {
    //handleSubmit
    const { reset, control } = useForm<IInfoArticleInput>({
        resolver: yupResolver(createArticleSchema)
    })

    const [isLoading, setIsLoading] = useState(false)

    // const onSubmit: SubmitHandler<IInfoArticleInput> = (data) => {
    //     setIsLoading(true)
    // }
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
                        <RHTextArea
                            name="content"
                            control={control}
                            label="Conteúdo"
                            type="text"
                            disabled={isLoading}
                            rows={20}
                            maxRows={100}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}