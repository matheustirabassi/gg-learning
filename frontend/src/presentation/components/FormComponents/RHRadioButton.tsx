import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import { Controller } from "react-hook-form"

interface IRHRadioButtonProps {
    name: string
    control: any
    label: string
    disabled: boolean
    options: string[]
}

export const RHRadioButton = ({ name, control, label, disabled, options }: IRHRadioButtonProps) => {
    const generateRadioOptions = () => {
        return options.map((labelOpt, index) => (
          <FormControlLabel
            key={index}
            value={index}
            label={labelOpt}
            control={<Radio />}
          />
        ));
      };
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                    formState,
                }) => (
                    <RadioGroup value={value || ''} onChange={onChange}>
                        {generateRadioOptions()}
                    </RadioGroup>
                )}
            />
        </FormControl>
    )
}