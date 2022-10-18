import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { PageBaseLayout } from "presentation/components/PageBaseLayout/PageBaseLayout"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArticleDTO } from "data/dto/ArticleDTO"
import { ROUTES } from "Routes"
import { QuizzContentView } from "../QuizzPage/QuizzContentView"
import { useDebounce } from 'hooks/UseDebounce';
import { ArticleAPI } from "data/api/ArticleAPI"
import { useAuthContext } from "contexts/AuthContext"

export const ArticleContentView = () => {
    const { id } = useParams<'id'>()
    const [isLoading, setIsLoading] = useState(false)
    const [article, setArticle] = useState<ArticleDTO>(new ArticleDTO('', '', '', '', '', []))
    const navigate = useNavigate()
    const { debounce } = useDebounce(5000)
    const { token } = useAuthContext()

    useEffect(() => {
        setIsLoading(true)
        debounce(() => (
            ArticleAPI.getById(Number(id), token)
                .then((result) => {
                    setIsLoading(false)

                    if (result instanceof Error) {
                        alert(result.message)
                        navigate(ROUTES.HOME)
                    } else {
                        console.log(result)
                        setArticle(result)
                        setIsLoading(false)
                    }
                })
        ))
    }, [id, debounce, navigate])

    return (
        <PageBaseLayout showSideFooter>
            <Box display="flex" flexDirection="column" justifyContent="center" marginX={20}>
                <Box>
                    <Typography
                        id="title"
                        variant={"h1"}
                        color="secondary"
                        my="15px"
                        padding="20px"
                    >
                        {
                            article ? article.title : 'Titulo'

                        }
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        id="text"
                        variant="body1"
                        color="secondary"
                        paragraph
                    > {article ? article.content : 'Erro ao carregar artigo'}
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="column" justifyContent="center" marginY={2}>
                    <Typography
                        variant={"h1"}
                        color="secondary"
                        my="15px"
                        padding="20px">
                        Quizz
                    </Typography>

                    <QuizzContentView id={Number(id)} />
                </Box>
            </Box>
        </PageBaseLayout>
    )
}