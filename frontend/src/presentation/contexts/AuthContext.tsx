import { Api } from "presentation/axios/AxiosConfig"
import { createContext, useState, useEffect, useCallback, useMemo, useContext } from "react"

interface IAuthContextData {
    isAuthenticated: boolean
    Token: string
    register: () => void
    logout: () => void
    login: (userName: string, password: string) => Promise<string | void>
}

const AuthContext = createContext({} as IAuthContextData)

const LOCAL_STORAGE_KEY__ACCESS_TOKEN = 'APP_ACCESS_TOKEN'
const Token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaWd1ZWxAZ21haWwuY29tIiwiZXhwIjoxNjY1MDgxNjg1fQ.2FiuaYJmD7sNT0bVvWdgN88YXogJWAN1dbPDYWkGme5Uvh3_pKShWY8bLmYUfPn4mn3L8XZR4PIzDG3MwrdsYQ"

interface IAuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string>()

    useEffect(() => {
        const accessToken_ = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)

        if (accessToken_) {
            setAccessToken(JSON.parse(accessToken_))
        } else {
            setAccessToken(undefined)
        }
    }, [])

    const handleLogin = useCallback(async (email: string, password: string) => {
        await Api.post("/login", {
            "email": email,
            "password": password
        })
            .then((response) => {
                console.log(response)
                console.log(response.headers)
                console.log(response.headers["Authorization"])
                localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, JSON.stringify(Token))
                setAccessToken(Token)
            })
            .catch((error) =>{
                alert("Usuário ou senha incorretos")
            })
    }, [])

    const handleLogout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)
        setAccessToken(undefined)
    }, [])

    const handleRegister = useCallback(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, JSON.stringify(Token))
        setAccessToken(Token)
    }, [])

    const isAuthenticated = useMemo(() => !!accessToken, [accessToken])

    return (
        <AuthContext.Provider value={{ isAuthenticated, Token, login: handleLogin, logout: handleLogout, register: handleRegister }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)