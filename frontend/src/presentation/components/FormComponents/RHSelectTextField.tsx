import { MenuItem, TextField } from "@mui/material"
import { useState } from "react"
import { Controller } from "react-hook-form"

type UserType = { label: string, value: string }

interface IRHSelectTextfieldProps {
  name: string
  control: any
  label: string
  type: string
  disabled: boolean
  options: UserType[]
}

export const RHSelectTextfield = ({ name, control, label, type, disabled, options }: IRHSelectTextfieldProps) => {
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
          select
          label={label}
          type={type}
          value={value || ""}
          disabled={disabled}
          error={!!error}
          helperText={error ? error.message : null}
          onChange={onChange}
        >
          {
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))
          }
        </TextField>
      )}
    />
  )
}