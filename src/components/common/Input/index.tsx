import React from 'react'
import { InputComponentStyle } from './index.style'
import {
  type InputProps,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

type InputComponentProps = InputProps

export const InputComponent: React.FC<InputComponentProps> = () => {
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
    <InputComponentStyle>
      <FormControl
        sx={{ m: 1, width: '100%' }}
        variant="outlined"
        className="input-form-control"
      >
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
          className="text"
          placeholder="Password"
          startAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{ color: '#B8B8B8' }}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="start"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </InputComponentStyle>
  )
}
