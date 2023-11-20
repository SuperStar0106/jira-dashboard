import * as React from 'react'
import { Input as BaseInput, type InputProps } from '@mui/base/Input'
import { type UseFormRegister, type RegisterOptions } from 'react-hook-form'
import { styled } from '@mui/system'

interface InputMultilineProps {
  fieldName: string
  options?: RegisterOptions
  register?: UseFormRegister<any>
}

const Input = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <BaseInput
      slots={{
        root: RootDiv,
        input: 'input',
        textarea: TextareaElement,
      }}
      {...props}
      ref={ref}
    />
  )
})

export const InputMultiline: React.FC<InputMultilineProps> = (props) => {
  const { register, options, fieldName, ...rest } = props

  return (
    <Input
      aria-label="Demo input"
      multiline
      placeholder="Type something…"
      {...rest}
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/no-non-null-assertion, @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unnecessary-type-assertion
      {...(register && register(fieldName!, options))}
    />
  )
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
}

const RootDiv = styled('div')`
  display: flex;
  max-width: 100%;
`

const TextareaElement = styled('textarea', {
  shouldForwardProp: (prop) =>
    !['ownerState', 'minRows', 'maxRows'].includes(prop.toString()),
})(
  ({ theme }) => `
  width: 620px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 8px 12px;
  border-radius: 8px 8px 0 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? '#fff' : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border-color: #b2bac2;
  }

  &:focus {
    border-Color: #6f7e8c;
    border-width: 2px;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
)
