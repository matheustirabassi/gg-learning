import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import "../../../assets/yup/TraducoesYup"
import { Box, Card, CardContent, Typography, CardActions, Button, CircularProgress } from "@mui/material"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { RHMaskTextField } from "../FormComponents/RHMaskTextField"
import { RHTextField } from "../FormComponents/RHTextField"
import infoUser from '../../../data/json/info.json';

const createAccountSchema = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    birthDate: yup.string().required().min(10).max(10),
    userName: yup.string().required(),
    password: yup.string().required().min(3),
})

interface IInfoAccountInput {
    name: string
    cpf: string
    email: string
    birthDate: string
    userName: string
    password: string
}

export const DetalhesUsuario = () => {
    const [user, setUser] = useState<IInfoAccountInput>(infoUser)

    const { handleSubmit, control } = useForm<IInfoAccountInput>({
        resolver: yupResolver(createAccountSchema),
        defaultValues: user
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<IInfoAccountInput> = (data) => {
        setIsLoading(false)
        console.log(data)
    }

    const handleTest = () => {
        setUser(user)
        console.log(user)
    }
    
    return(
        <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center' sx={{ background: "background.default" }}>
            <Box>
                <Card>
                    <CardContent>
                        <Box display='flex' flexDirection='column' gap={2} width={500} padding={2}>

                            <Typography variant='h4' align='center'>Suas informações</Typography>

                            <RHTextField
                                name="name"
                                control={control}
                                label="Nome"
                                type="text"
                                disabled={isLoading}
                            />
                            <RHMaskTextField
                                name="cpf"
                                control={control}
                                label="CPF"
                                type="text"
                                disabled={isLoading}
                                mask="000.000.000-00"
                            />
                            <RHTextField
                                name="email"
                                control={control}
                                label="E-mail"
                                type="email"
                                disabled={isLoading}
                            />
                            <RHMaskTextField
                                name="birthDate"
                                control={control}
                                label="Data de nascimento"
                                type="text"
                                disabled={isLoading}
                                mask="00/00/0000"
                            />
                            <RHTextField
                                name="userName"
                                control={control}
                                label="Usuário"
                                type="text"
                                disabled={isLoading}
                            />
                            <RHTextField
                                name="password"
                                control={control}
                                label="Senha"
                                type="password"
                                disabled={isLoading}
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
                                Atualizar
                            </Button>
                            <Button onClick={handleTest}>tdsad  </Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}