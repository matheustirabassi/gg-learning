import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

interface IRHMaskTextFieldProps {
  name: string
  control: any
  label: string
  type: string
  disabled: boolean
  mask: string
}

export const RHMaskTextField = ({ name, control, label, type, disabled, mask }: IRHMaskTextFieldProps) => {
  const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props, _ref) {
      const { onChange, ...other } = props;
      return (
        <IMaskInput
          {...other}
          mask={mask}
          onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
          overwrite
        />
      );
    },
  );

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
          InputProps={{
            inputComponent: TextMaskCustom as any,
          }}
        />
      )}
    />
  )
}