import { Grid, Box, Skeleton } from "@mui/material";
import { useAuthContext } from 'contexts/AuthContext';
import { ArticleAPI } from 'data/api/ArticleAPI';
import { ArticleDTO } from 'data/dto/ArticleDTO';
import { useDebounce } from 'hooks/UseDebounce';
import { ArticleCard } from 'presentation/components/Card/ArticleCard';
import { PageBaseLayout } from 'presentation/components/PageBaseLayout/PageBaseLayout';
import { useEffect, useState } from 'react';

export const AllArticlesContent = () => {
    const [articles, setArticle] = useState<ArticleDTO[]>([])
    const { debounce } = useDebounce(5000)
    const { token } = useAuthContext()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        debounce(() => {
            ArticleAPI.getAll(token)
                .then((result) => {
                    setIsLoading(false)
                    if (result instanceof Error) {
                        alert(result.message)
                    } else {
                        console.log(result)
                        setArticle(result)
                    }
                })
        })
    })

    return (
        <PageBaseLayout showSideFooter>
            <Box display="flex" flexDirection="row" alignItems="center" marginX={10} marginTop={2} justifyContent="center">
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box marginBottom={2} width="auto" padding={1} display="flex" alignItems="center" justifyContent="center" flexDirection="row">
                        <Grid container spacing={1} justifyContent="space-around" paddingLeft={10}>
                            {
                                articles.map((article, index) => {
                                    return (
                                        <Grid key={index} item xs={12} sm={6} lg={4} xl={3} marginBottom={2}>
                                            <ArticleCard
                                                bgColor='primary'
                                                linkImage={"imgs/article.svg"}
                                                title={article.title}
                                                description={article.subtitle}
                                                id={article.id}
                                            />
                                        </Grid>
                                    )
                                })
                            }

                            {
                                isLoading && (
                                    <>
                                        <Grid item xs={12} sm={6} lg={4} xl={3} marginBottom={2}>
                                            <Skeleton variant="rectangular" height={"400px"} width="300px" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} xl={3} marginBottom={2}>
                                            <Skeleton variant="rectangular" height={"400px"} width="300px" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} xl={3} marginBottom={2}>
                                            <Skeleton variant="rectangular" height={"400px"} width="300px" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} xl={3} marginBottom={2}>
                                            <Skeleton variant="rectangular" height={"400px"} width="300px" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4} xl={3} marginBottom={2}>
                                            <Skeleton variant="rectangular" height={"400px"} width="300px" />
                                        </Grid>
                                    </>
                                )
                            }
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </PageBaseLayout>
    )
}