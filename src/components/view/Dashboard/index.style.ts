import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'
// import { IMAGE } from '../../../consts'

type DashboardViewStyleProps = StyledComponentProps

export const DashboardViewStyle = styled('div')<DashboardViewStyleProps>(({
  theme,
}) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'flex',
    width: '100%',
    height: '100%',
    userSelect: 'none',

    '.url-text': {
      color: customTheme.colors.primaryGray20,
      fontSize: '12px',
    },

    '.title-text': {
      fontSize: '36px',
      color: '#252C32',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '48px',
      maxWidth: '1440px',
    },
  }
})
