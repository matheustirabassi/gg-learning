import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import "../../../assets/yup/TraducoesYup"
import { Box, Button, Card, CardActions, CardContent, CircularProgress, Typography } from "@mui/material"
import { RHTextField } from "presentation/components/FormComponents/RHTextField"
import { ReactComponent as LogoIcn } from "assets/icons/logo.svg";
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useAuthContext } from "presentation/contexts/AuthContext"
import { RHSelectTextfield } from "presentation/components/FormComponents/RHSelectTextField"
import { RHMaskTextField } from "presentation/components/FormComponents/RHMaskTextField"
import { Api } from "presentation/axios/AxiosConfig"

const createAccountSchema = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    birthDate: yup.string().required().min(10).max(10),
    userType: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().required().min(3),
})

interface ICreateAccountInput {
    name: string
    cpf: string
    email: string
    birthDate: string
    userType: string
    userName: string
    password: string
}

type UserType = { label: string, value: string }

const createUser = async (user: ICreateAccountInput) => {
    try {
        const { data } = await Api.post('/users/create', user)

        if(data){
            console.log(data)
        }
    } catch (error) {
        alert(error)
    }
}

export const CreateAccountContentView = () => {
    const { logout } = useAuthContext()
    const { handleSubmit, reset, control } = useForm<ICreateAccountInput>({
        resolver: yupResolver(createAccountSchema)
    })

    const options: UserType[] = [
        {
            label: "Leitor",
            value: "READER",
        },
        {
            label: "Editor",
            value: "PUBLISHER",
        }
    ]

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<ICreateAccountInput> = (data) => {
        setIsLoading(false)
        createUser(data)
        reset()
        logout()
    }

    return (
        <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center' marginTop={2}>
            <Box>
                <Card>
                    <CardContent>
                        <Box display='flex' flexDirection='column' gap={2} width={500} padding={2}>
                            <Box display="flex" flexDirection="row" width="100%" justifyContent="center">
                                <Box>
                                    <LogoIcn />
                                </Box>
                                <Typography
                                    variant="h4"
                                    noWrap
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontWeight: 700,
                                        color: 'primary.main',
                                        textDecoration: 'none',
                                    }}
                                >
                                    GGLearning
                                </Typography>
                            </Box>

                            <Typography variant='h4' align='center'>Registre-se</Typography>

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
                            <RHSelectTextfield
                                options={options}
                                name="userType"
                                control={control}
                                label="Tipo de usuário"
                                type="text"
                                disabled={isLoading}
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
                                Registrar
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}