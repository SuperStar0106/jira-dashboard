import React from 'react'
import { InputComponentStyle } from './index.style'
import {
  type InputProps,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { NoEncryptionOutlined } from '@mui/icons-material'

type InputComponentProps = InputProps & {
  icon?: React.ReactNode
  placeholder?: string
  isPassword?: boolean
  type?: string
}

export const InputComponent: React.FC<InputComponentProps> = (props) => {
  const { icon, placeholder, isPassword, type } = props
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault()
  }

  return (
    <InputComponentStyle
      type={type}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <FormControl
        sx={{ m: 1, width: '100%' }}
        variant="outlined"
        className="input-form-control"
      >
        <OutlinedInput
          id="outlined-adornment-password"
          endAdornment={type === 'end_icon_input' && icon}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
          className="text"
          placeholder={placeholder}
          type={
            isPassword === undefined ||
            (isPassword != null && isPassword && showPassword)
              ? 'text'
              : 'password'
          }
          startAdornment={
            type !== 'end_icon_input' && (
              <InputAdornment position="end">
                {icon != null ? (
                  <IconButton
                    sx={{ color: '#B8B8B8' }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="start"
                  >
                    {isPassword == null || (isPassword && !showPassword) ? (
                      icon
                    ) : (
                      <NoEncryptionOutlined />
                    )}
                  </IconButton>
                ) : null}
              </InputAdornment>
            )
          }
        />
      </FormControl>
    </InputComponentStyle>
  )
}
