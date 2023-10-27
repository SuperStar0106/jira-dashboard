import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'

type InputComponentStyleProps = StyledComponentProps

export const InputComponentStyle = styled('div')<InputComponentStyleProps>(({
  theme,
}) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'flex',
    width: '100%',

    '.text': {
      borderRadius: '15px',
      fontSize: '14px',
      color: customTheme.colors.primaryLight00,
      fontFamily: customTheme.fonts.mainFont,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '28px',
      letterSpacing: '0.5px',
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
