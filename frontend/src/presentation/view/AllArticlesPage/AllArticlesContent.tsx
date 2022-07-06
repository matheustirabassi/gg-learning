import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, IconButton, Container } from "@mui/material";
import { Card } from 'presentation/components/Card/Card';

export const AllArticlesContent = () => {
    return(
        <Container maxWidth="xl">
            <Grid container spacing={2}  margin="10px" alignItems="center">
                <Grid item xs ={1}>
                    <IconButton>
                        <ArrowBackIosIcon sx={{color: "primary.main"}} fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid item xs ={10}>
                    <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 3, sm: 6, md: 12 }}
                        
                        >

                            <Grid item xs={3} sm={3} md={3}>
                                <Card
                                    bgColor="primary"
                                    linkImage="imgs/python.svg"
                                    title="Primeiros passos em Python"
                                    description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
                                />
                            </Grid>
                            <Grid item xs={3} sm={3} md={3}>
                                <Card
                                    bgColor="primary"
                                    linkImage="imgs/python.svg"
                                    title="Primeiros passos em Python"
                                    description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
                                />
                            </Grid>
                            <Grid item xs={3} sm={3} md={3}>
                                <Card
                                    bgColor="primary"
                                    linkImage="imgs/python.svg"
                                    title="Primeiros passos em Python"
                                    description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
                                />
                            </Grid>
                            <Grid item xs={3} sm={3} md={3}>
                                <Card
                                    bgColor="primary"
                                    linkImage="imgs/python.svg"
                                    title="Primeiros passos em Python"
                                    description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
                                />
                            </Grid>
                            <Grid item xs={3} sm={3} md={3}>
                                <Card
                                    bgColor="primary"
                                    linkImage="imgs/python.svg"
                                    title="Primeiros passos em Python"
                                    description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
                                />
                            </Grid>
                            <Grid item xs={3} sm={3} md={3}>
                                <Card
                                    bgColor="primary"
                                    linkImage="imgs/python.svg"
                                    title="Primeiros passos em Python"
                                    description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
                                />
                            </Grid>
                            <Grid item xs={3} sm={3} md={3}>
                                <Card
                                    bgColor="primary"
                                    linkImage="imgs/python.svg"
                                    title="Primeiros passos em Python"
                                    description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
                                />
                            </Grid>
                            <Grid item xs={3} sm={3} md={3}>
                                <Card
                                    bgColor="primary"
                                    linkImage="imgs/python.svg"
                                    title="Primeiros passos em Python"
                                    description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                <Grid item xs ={1}>
                    <IconButton>
                        <ArrowForwardIosIcon sx={{color: "primary.main"}} fontSize="large"/>
                    </IconButton>
                </Grid>
            </Grid>
        </Container>

    )
}
