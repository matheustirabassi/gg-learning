import { ArrowForwardIos, ArrowBackIos, Search } from '@mui/icons-material';
import { Grid, IconButton, Box, TextField, InputAdornment } from "@mui/material";
import { ArticleCard } from 'presentation/components/Card/ArticleCard';
import { PageBaseLayout } from 'presentation/components/PageBaseLayout/PageBaseLayout';
import data from '../../../data/json/articles.json';

export const AllArticlesContent = () => {
    return (
        <PageBaseLayout showSideFooter>
            <Box display="flex" flexDirection="row" alignItems="center" marginX={10} marginTop={2} justifyContent="center">
                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton>
                        <ArrowBackIos sx={{ color: "primary.main" }} fontSize="large" />
                    </IconButton>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box marginBottom={2} width="50%" padding={1} display="flex" alignItems="center" justifyContent="center" flexDirection="row">
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
                            data.map(article => {
                                return (
                                    <Grid item xs={12} sm={6} lg={4} xl={3} marginBottom={2}>
                                        <ArticleCard
                                            bgColor='primary'
                                            linkImage={article.img}
                                            title={article.title}
                                            description={article.description}
                                        />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton>
                        <ArrowForwardIos sx={{ color: "primary.main" }} fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
        </PageBaseLayout>
    )
}