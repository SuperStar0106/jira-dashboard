import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'

type InputComponentStyleProps = StyledComponentProps & {
  type?: string
}

export const InputComponentStyle = styled('div')<InputComponentStyleProps>(({
  theme,
  type,
}) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'flex',
    width: '100%',
    height: '100%',

    '.text': {
      borderRadius: type === 'end_icon_input' ? '100px' : '15px',
      fontSize: type === 'digital' ? '40px' : '14px',
      color: type === 'digital' ? 'black' : customTheme.colors.primaryLight00,
      fontFamily: customTheme.fonts.mainFont,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '28px',
      letterSpacing: '0.5px',
      height: '100%',
    },

    '.label': {
      color: customTheme.colors.primaryLight00,
    },

    '& label.Mui-focused': {
      color: customTheme.colors.primaryGray00,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
  }
})
