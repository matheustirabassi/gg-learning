import { ArrowForwardIos, ArrowBackIos, Search } from '@mui/icons-material';
import { Grid, IconButton, Box, TextField, InputAdornment } from "@mui/material";
import { ArticleDTO } from 'data/dto/ArticleDTO';
import { ArticleAPI } from 'presentation/api/ArticleAPI';
import { ArticleCard } from 'presentation/components/Card/ArticleCard';
import { PageBaseLayout } from 'presentation/components/PageBaseLayout/PageBaseLayout';
import { useEffect, useState } from 'react';

export const AllArticlesContent = () => {
    const [articles, setArticle] = useState<ArticleDTO[]>([])

    useEffect(() =>{
        ArticleAPI.getAll()
        .then((result) =>{
            if (result instanceof Error) {
                alert(result.message)
            } else {
                console.log(result)
                setArticle(result)
            }
        })
    })

    return (
        <PageBaseLayout showSideFooter>
            <Box display="flex" flexDirection="row" alignItems="center" marginX={10} marginTop={2} justifyContent="center">
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box marginBottom={2} width="70%" padding={1} display="flex" alignItems="center" justifyContent="center" flexDirection="row">
                        <TextField
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: "secondary.main",
                                    '& fieldset': {
                                        borderColor: 'secondary.main',
                                        borderWidth: 2
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'secondary.main',
                                        borderWidth: 2
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'primary.main',
                                        borderWidth: 2
                                    },
                                },
                            }}
                            placeholder="Pesquisar artigos"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <Search color='secondary'/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={1}
                    >
                        {
                            articles.map((article, index) => {
                                return (
                                    <Grid key={index} item xs={12} sm={6} lg={4} xl={4} marginBottom={2}>
                                        <ArticleCard
                                            bgColor='primary'
                                            linkImage={"imgs/python.svg"}
                                            title={article.title}
                                            description={article.subtitle}
                                            id={article.id}
                                        />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Box>
            </Box>
        </PageBaseLayout>
    )
}