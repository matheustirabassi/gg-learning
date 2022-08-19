import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

interface IRHTextfieldProps {
  name: string
  control: any
  label: string
  type: string
  disabled: boolean
}

export const RHTextField = ({ name, control, label, type, disabled }: IRHTextfieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <TextField
          fullWidth
          label={label}
          type={type}
          value={value || ''}
          disabled={disabled}
          error={!!error}
          helperText={error ? error.message : null}
          variant="outlined"
          onChange={onChange}
        />
      )}
    />
  )
}