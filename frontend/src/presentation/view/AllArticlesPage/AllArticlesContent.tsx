import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, IconButton, Box } from "@mui/material";
import { ArticleCard } from 'presentation/components/Card/ArticleCard';
import SideFooter from 'presentation/components/Footer/SideFooter';
import { LayoutBaseDePagina } from 'presentation/components/LayoutBaseDePagina/LayoutBaseDePagina';
import data from '../../../data/json/articles.json';

export const AllArticlesContent = () => {
    return (
        <LayoutBaseDePagina mostrarMenu mostrarRodape>
            <Box display="flex" flexDirection="row" alignItems="center" marginX={10}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton>
                        <ArrowBackIosIcon sx={{ color: "primary.main" }} fontSize="large" />
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
                        <ArrowForwardIosIcon sx={{ color: "primary.main" }} fontSize="large" />
                    </IconButton>
                </Box>
            </Box>

            
        </LayoutBaseDePagina>
    )
}
