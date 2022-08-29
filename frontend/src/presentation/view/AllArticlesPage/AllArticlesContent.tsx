import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import { Grid, IconButton, Box } from "@mui/material";
import { ArticleCard } from 'presentation/components/Card/ArticleCard';
import { PageBaseLayout } from 'presentation/components/PageBaseLayout/PageBaseLayout';
import data from '../../../data/json/articles.json';

export const AllArticlesContent = () => {
    return (
        <PageBaseLayout showFooter>
            <Box display="flex" flexDirection="row" alignItems="center" marginX={10} marginTop={2}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton>
                        <ArrowBackIos sx={{ color: "primary.main" }} fontSize="large" />
                    </IconButton>
                </Box>


                <Grid
                    container
                    direction="row"

                    alignItems="center"
                    spacing={2}
                >
                    {
                        data.map(article => {
                            return (
                                <Grid item xs={6} md={4} lg={3} xl={2}>
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

                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton>
                        <ArrowForwardIos sx={{ color: "secondary.main" }} fontSize="large" />
                    </IconButton>
                </Box>
            </Box>

        </PageBaseLayout>
    )
}
