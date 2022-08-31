import { Api } from "presentation/axios/AxiosConfig"
import { createContext, useState, useEffect, useCallback, useMemo, useContext } from "react"

interface IAuthContextData {
    isAuthenticated: boolean
    register: () => void
    logout: () => void
    login: (userName: string, password: string) => Promise<string | void>
}

const AuthContext = createContext({} as IAuthContextData)

const LOCAL_STORAGE_KEY__ACCESS_TOKEN = 'APP_ACCESS_TOKEN'

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
        const data = await Api.post("/login", {
            "email": email,
            "password": password
        })

        if (data) {
            console.log(data)
            localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, JSON.stringify("T0K3N4C335"))
            setAccessToken("T0K3N4C335")
        } else {
            console.log(data)
            alert("Usuário e/ou senha incorretos!")
        }
    }, [])

    const handleLogout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)
        setAccessToken(undefined)
    }, [])

    const handleRegister = useCallback(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, JSON.stringify("T0K3N4C335"))
        setAccessToken("T0K3N4C335")
    }, [])

    const isAuthenticated = useMemo(() => !!accessToken, [accessToken])

    return (
        <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout, register: handleRegister }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)