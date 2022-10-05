import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

interface IRHTextAreaProps {
  name: string
  control: any
  label: string
  type: string
  disabled: boolean
  rows: number
}

export const RHTextArea = ({ name, control, label, type, disabled, rows }: IRHTextAreaProps) => {
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
          multiline
          rows={rows}
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