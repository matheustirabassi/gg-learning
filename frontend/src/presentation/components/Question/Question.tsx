import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material"

export interface QuestionProps {
    num?:number,
    question?: string,
    alternatives?: string[],
}

export const Question = ({num, question, alternatives }: QuestionProps) => {
    return (
        <FormControl>
            <FormLabel id="radio-group-question">
                <Typography 
                id="question"
                color="secondary"
                variant="h4">
                    {num} - {question}
                </Typography>

            </FormLabel>
            <RadioGroup
                aria-aria-labelledby="radio-group-question"
                name="alternatives-group"

            >

                {alternatives?.map((alternative, i) => {
                    return (
                        <FormControlLabel value={i} control={<Radio sx={{color:"primary.main"}}/>} sx={{color:"secondary.main"}} label={alternative}></FormControlLabel>
                    )
                })}
            </RadioGroup>

        </FormControl>
    )
}