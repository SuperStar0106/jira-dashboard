import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'

type CardComponentStyleProps = StyledComponentProps

export const CardComponentStyle = styled('div')<CardComponentStyleProps>(({
  theme,
}) => {
  const customTheme = theme as CustomTheme
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    '.card': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderRadius: '20px',
      background: customTheme.colors.white,
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
      color: 'black',
    },
  }
})
