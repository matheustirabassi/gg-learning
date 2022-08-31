import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import "../../../assets/yup/TraducoesYup"
import { Box, Button, Card, CardActions, CardContent, CircularProgress, Skeleton, Typography } from "@mui/material"
import { RHTextField } from "presentation/components/FormComponents/RHTextField"
import { ReactComponent as LogoIcn } from "assets/icons/logo.svg";
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useAuthContext } from "presentation/contexts/AuthContext"
import { RHSelectTextfield } from "presentation/components/FormComponents/RHSelectTextField"
import { RHMaskTextField } from "presentation/components/FormComponents/RHMaskTextField"
import { Api } from "presentation/axios/AxiosConfig"
import axios from 'axios'


const createAccountSchema = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    birthDate: yup.string().required().min(10).max(10),
    typeUser: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().required().min(3),
})

interface ICreateAccountInput {
    name: string
    cpf: string
    email: string
    birthDate: string
    typeUser: string
    userName: string
    password: string
}

type UserType = { label: string, value: string }

const createUser = async (user: ICreateAccountInput) => {
    try {
        const data = await Api.post('/users/create', {
            "name": user.name,
            "cpf": user.cpf,
            "email": user.email,
            "typeUser": user.typeUser,
            "userName": user.userName,
            "password": user.password 
        })
        console.log(data)
        if (data) {
            console.log(data)
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

export const CreateAccountContentView = () => {
    const { logout } = useAuthContext()
    const { handleSubmit, reset, control } = useForm<ICreateAccountInput>({
        resolver: yupResolver(createAccountSchema)
    })
    const [isLoadingFields, setIsLoadingFields] = useState(false)

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
        setIsLoadingFields(false)
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

                            {
                                isLoadingFields && (
                                    <Skeleton variant="rectangular" animation="wave" height={56} />
                                )
                            }
                            {
                                isLoadingFields && (
                                    <Skeleton variant="rectangular" animation="wave" height={56} />
                                )
                            }
                            {
                                isLoadingFields && (
                                    <Skeleton variant="rectangular" animation="wave" height={56} />
                                )
                            }
                            {
                                isLoadingFields && (
                                    <Skeleton variant="rectangular" animation="wave" height={56} />
                                )
                            }
                            {
                                isLoadingFields && (
                                    <Skeleton variant="rectangular" animation="wave" height={56} />
                                )
                            }
                            {
                                isLoadingFields && (
                                    <Skeleton variant="rectangular" animation="wave" height={56} />
                                )
                            }
                            {
                                isLoadingFields && (
                                    <Skeleton variant="rectangular" animation="wave" height={56} />
                                )
                            }
                            {
                                !isLoadingFields && (
                                    <RHTextField
                                        name="name"
                                        control={control}
                                        label="Nome"
                                        type="text"
                                        disabled={isLoading}
                                    />
                                )
                            }
                            {
                                !isLoadingFields && (
                                    <RHMaskTextField
                                        name="cpf"
                                        control={control}
                                        label="CPF"
                                        type="text"
                                        disabled={isLoading}
                                        mask="000.000.000-00"
                                    />
                                )
                            }
                            {
                                !isLoadingFields && (
                                    <RHTextField
                                        name="email"
                                        control={control}
                                        label="E-mail"
                                        type="email"
                                        disabled={isLoading}
                                    />
                                )
                            }
                            {
                                !isLoadingFields && (
                                    <RHMaskTextField
                                        name="birthDate"
                                        control={control}
                                        label="Data de nascimento"
                                        type="text"
                                        disabled={isLoading}
                                        mask="00/00/0000"
                                    />
                                )
                            }
                            {
                                !isLoadingFields && (
                                    <RHSelectTextfield
                                        options={options}
                                        name="typeUser"
                                        control={control}
                                        label="Tipo de usuário"
                                        type="text"
                                        disabled={isLoading}
                                    />
                                )
                            }
                            {
                                !isLoadingFields && (
                                    <RHTextField
                                        name="userName"
                                        control={control}
                                        label="Usuário"
                                        type="text"
                                        disabled={isLoading}
                                    />
                                )
                            }
                            {
                                !isLoadingFields && (
                                    <RHTextField
                                        name="password"
                                        control={control}
                                        label="Senha"
                                        type="password"
                                        disabled={isLoading}
                                    />
                                )
                            }

                            <Button variant='contained' onClick={() => setIsLoadingFields(oldValue => !oldValue)}>
                                Teste skeleton
                            </Button>
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