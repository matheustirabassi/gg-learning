import { Button, Box, FormControl, Grid, Typography } from "@mui/material"
import { PageBaseLayout } from "presentation/components/PageBaseLayout/PageBaseLayout"
import { Question } from "presentation/components/Question/Question"


export const QuizzContentView = () => {
    return (

        <PageBaseLayout showSideFooter>
            <Box display="flex" justifyContent="center" >
                <FormControl sx={{ marginTop: "20px" }}>
                    <Grid container spacing={2} direction="column">
                        <Grid item >
                            <Question
                                num={1}
                                question="O python é fortemente tipado?"
                                alternatives={["Sim", "Não"]}
                            />
                        </Grid>
                        <Grid item>
                            <Question
                                num={2}
                                question="Qual o comando para receber o valor de uma variável como entrada?"
                                alternatives={["input()", "scanf()", "gets()", "read()"]}
                            />
                        </Grid>
                        <Grid item>
                            <Question
                                num={3}
                                question="Qual o comando para realizar um comentário em python?"
                                alternatives={["<!-- Comentário -->", "--Comentário", "//Comentário", "#Comentário"]}
                            />
                        </Grid>
                    </Grid>

                    <Box display="flex" flexDirection="row" justifyContent="center" marginY={2}>
                        <Button variant="outlined"
                            sx={{
                                border: "2px solid",
                                padding: "10px 50px",
                                marginTop: "35px",
                                marginBottom: "20px"
                            }}
                        >
                            <Typography variant="h3">
                                Enviar Quizz
                            </Typography>
                        </Button>
                    </Box>

                </FormControl>
            </Box>

        </PageBaseLayout>

    )
}
