import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material"
import { Controller } from "react-hook-form"

interface IRHRadioButtonProps {
    name: string
    control: any
    label: string
    disabled: boolean
    options: string[]
    fontWhite: boolean
}

export const RHRadioButton = ({ name, control, label, disabled, options, fontWhite }: IRHRadioButtonProps) => {
    const generateRadioWhiteOptions = () => {
        return options.map((labelOpt, index) => (
                <FormControlLabel
                    key={index}
                    value={index}
                    label={labelOpt}
                    control={<Radio sx={{ color: "primary.main" }} />}
                    sx={{ color: "secondary.main" }}
                />
        ));
    };

    const generateRadioBlackOptions = () => {
        return options.map((labelOpt, index) => (
                <FormControlLabel
                    key={index}
                    value={index}
                    label={labelOpt}
                    control={<Radio/>}
                />
        ));
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">
                <Typography
                    id="question"
                    color="secondary"
                    variant="h4">
                    {label}
                </Typography>
            </FormLabel>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                    formState,
                }) => (
                    <RadioGroup value={value || ''} onChange={onChange}>
                        {fontWhite? generateRadioWhiteOptions() : generateRadioBlackOptions()}
                    </RadioGroup>
                )}
            />
        </FormControl>
    )
}