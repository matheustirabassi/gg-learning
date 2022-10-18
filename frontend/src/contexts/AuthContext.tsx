import { Api } from "config/axios/AxiosConfig"
import { createContext, useState, useEffect, useCallback, useMemo, useContext } from "react"


export const LOCAL_STORAGE_KEY__ACCESS_TOKEN: string = 'APP_ACCESS_TOKEN'
export const AUTHORIZATION_HEADER: string = 'authorization'
let token: string = ''

interface IAuthContextData {
	isAuthenticated: boolean
	token: string
	register: () => void
	logout: () => void
	login: (userName: string, password: string) => Promise<string | void>
}

interface IAuthProviderProps {
	children: React.ReactNode
}

const AuthContext = createContext({} as IAuthContextData)

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string>()

    useEffect(() => {
        const accessToken_ = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)

				if (accessToken_ !== undefined && accessToken_ !== 'undefined') {
					setAccessToken(JSON.parse(accessToken_!!))
				}

    }, [])

		/**
		 * Autentica o usuário na sessão.
		 *
		 * @param email O e-mail usado na autenticação.
		 * @param password A senha do usuário.
		 */
    const handleLogin = useCallback(async (email: string, password: string) => {
        await Api.post("/login", {
            "email": email,
            "password": password
        })
            .then((response) => {
                console.log(response)

								token = response.headers[AUTHORIZATION_HEADER]

                localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, JSON.stringify(token))
                setAccessToken(token)
            })
            .catch((error) =>{
                alert("Usuário ou senha incorretos")
            })
    }, [])

		/**
		 * Desloga o usuário da sessão.
		 */
    const handleLogout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)
        setAccessToken(undefined)
    }, [])

		/**
		 * Registra o token no local storage.
		 */
    const handleRegister = useCallback(() => {
		token = "a"
        localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, JSON.stringify(token))
        setAccessToken(token)
    }, [])

    const isAuthenticated = useMemo(() => !!accessToken, [accessToken])

    return (
			<AuthContext.Provider
				value={{
					isAuthenticated,
					token: accessToken!!,
					login: handleLogin,
					logout: handleLogout,
					register: handleRegister,
				}}
			>
				{children}
			</AuthContext.Provider>
		)
}

export const useAuthContext = () => useContext(AuthContext)
