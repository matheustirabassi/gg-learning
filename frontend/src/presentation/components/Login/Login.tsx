import * as yup from "yup"
import "../../../assets/yup/TraducoesYup"
import { useState } from "react"
import { useAuthContext } from "presentation/contexts/AuthContext"
import { Box, Card, CardContent, Typography, TextField, CardActions, Button, CircularProgress, Link } from "@mui/material"
import { ReactComponent as LogoIcn } from "assets/icons/logo.svg";
import { ROUTES } from "Routes"

interface ILoginProps {
    children: React.ReactNode
}

const loginSchema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required().min(3)
})

export const Login: React.FC<ILoginProps> = ({ children }) => {
    const { isAuthenticated, login } = useAuthContext()


    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const [userNameError, setUserNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmit = () => {
        setIsLoading(true)
        loginSchema.validate({ userName, password }, { abortEarly: false })
            .then(dadosValidados => {
                login(dadosValidados.userName, dadosValidados.password)
                    .then(() => {
                        setIsLoading(false)
                    })
            })
            .catch((errors: yup.ValidationError) => {
                setIsLoading(false)
                errors.inner.forEach(error => {
                    if (error.path === "userName") {
                        setUserNameError(error.message)
                    } else if (error.path === "password") {
                        setPasswordError(error.message)
                    }
                })
            })
    }

    if (isAuthenticated)
        return (
            <>{children}</>
        )

    return (
        <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center' sx={{ background: "#023047" }}>
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

                            <TextField
                                fullWidth
                                label='Usuário'
                                type='text'
                                value={userName}
                                disabled={isLoading}
                                error={!!userNameError}
                                helperText={userNameError}
                                onKeyDown={() => setUserNameError('')}
                                onChange={e => setUserName(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                label='Senha'
                                type='password'
                                value={password}
                                disabled={isLoading}
                                error={!!passwordError}
                                helperText={passwordError}
                                onKeyDown={() => setPasswordError('')}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <Link
                                href={ROUTES.ALLARTICLES}
                                underline="none"
                                >
                                
                                <Typography
                                    variant="h6"
                                   
                                >Esqueceu sua senha?</Typography>
                            </Link>

                            <Link
                                href={ROUTES.ALLARTICLES}
                                underline="none"
                                color="secondary.contrastText"
                                >
                                
                                <Typography
                                    variant="h4"
                                   align="center"
                                >Crie sua conta</Typography>
                            </Link>

                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box width='100%' display='flex' justifyContent='center' marginBottom={1}>
                            <Button
                                variant='contained'
                                disabled={isLoading}
                                onClick={handleSubmit}
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