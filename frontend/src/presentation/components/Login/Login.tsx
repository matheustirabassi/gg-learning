import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import "../../../assets/yup/TraducoesYup"
import { useState } from "react"
import { useAuthContext } from "presentation/contexts/AuthContext"
import { Box, Card, CardContent, Typography, CardActions, Button, CircularProgress, Link } from "@mui/material"
import { ReactComponent as LogoIcn } from "assets/icons/logo.svg";
import { ROUTES } from "Routes"
import { SubmitHandler, useForm } from "react-hook-form"
import { RHTextField } from "../FormComponents/RHTextField"

interface ILoginProps {
    children: React.ReactNode
}

interface ILoginInput {
    userName: string
    password: string
}

const loginSchema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required().min(3)
})

export const Login: React.FC<ILoginProps> = ({ children }) => {
    const { isAuthenticated, login, register } = useAuthContext()
    const { handleSubmit, reset, control } = useForm<ILoginInput>({
        resolver: yupResolver(loginSchema)
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<ILoginInput> = (data) => {
        setIsLoading(true)

        login(data.userName, data.password)
            .then(() => {
                setIsLoading(false)
                reset()
            })
    }

    if (isAuthenticated)
        return (
            <>{children}</>
        )

    return (
        <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center' sx={{ background: "background" }}>
            <Box>
                <Card>
                    <CardContent>
                        <Box display='flex' flexDirection='column' gap={2} width={350} padding={2}>
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

                            <Typography variant='h4' align='center'>Identifique-se</Typography>

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

                            <Link
                                href={ROUTES.ALLARTICLES}
                                underline="none"
                            >
                                <Typography
                                    variant="h5"

                                >Esqueceu sua senha?</Typography>
                            </Link>
                            <Link
                                href={ROUTES.CREATE_ACCOUNT}
                                onClick={register}
                                underline="none"
                                color="secondary.contrastText"
                            >
                                <Typography
                                    variant="h4"
                                    align="center"
                                    color="primary.main"
                                >Crie sua conta</Typography>
                            </Link>
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
                                Entrar
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}