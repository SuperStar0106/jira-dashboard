import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'
import { IMAGE } from '../../../consts'

type MainViewStyleProps = StyledComponentProps

export const MainViewStyle = styled('div')<MainViewStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'flex',
    width: '100%',
    height: '100vh',
    maxWidth: '90rem',
    backgroundImage: `url(${IMAGE.Main.dotImg})`,
    backgroundRepeat: 'no-repeat',

    '.person-img': {
      marginLeft: '15rem',
      marginTop: '8rem',
      marginBottom: '7rem',
    },

    '.back-img': {
      position: 'absolute',
      width: '100%',
      height: '100vh',
    },

    '.form-box': {
      display: 'flex',
      marginRight: '6.5rem',
      justifyContent: 'end',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },

    '.inside-form-box': {
      width: '28rem',
    },

    '.typo-text': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: customTheme.fonts.mainFont,
      fontStyle: 'normal',
      lineHeight: '28px',
      letterSpacing: '0.5px',
    },

    '.create-account': {
      fontWeight: customTheme.fontWeights.semibold,
      fontSize: '24px',
    },

    '.setup-account': {
      fontWeight: customTheme.fontWeights.light,
      fontSize: '13px',
      paddingBottom: '23px',
    },
  }
})
