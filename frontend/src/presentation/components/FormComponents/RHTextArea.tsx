import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

interface IRHTextAreaProps {
  name: string
  control: any
  label: string
  type: string
  disabled: boolean
  rows: number
  maxRows: number
}

export const RHTextArea = ({ name, control, label, type, disabled, rows, maxRows }: IRHTextAreaProps) => {
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
          maxRows={maxRows}
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