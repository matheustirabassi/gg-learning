import { Button, Container, FormControl, Grid, Typography } from "@mui/material"
import { Question } from "presentation/components/Question/Question"


export const QuizzContentView = () => {
    return (
        <Container>
            <FormControl sx={{ marginTop: "20px" }}>
                <Question
                    num={1}
                    question="O que é a vida?"
                    alternatives={["Não sei", "Ninguém sabe", "O que você quiser"]}
                />

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
            </FormControl>
        </Container>
    )
}
