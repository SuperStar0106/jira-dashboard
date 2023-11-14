import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'
import { IMAGE } from '../../../consts'

type MainViewStyleProps = StyledComponentProps

export const MainViewStyle = styled('div')<MainViewStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'flex',
    width: '100%',
    height: '100%',

    '.back-box': {
      backgroundImage: `url(${IMAGE.Main.dotImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '10',
    },

    '.dot-img': {
      width: '100%',
      height: '100%',
    },

    '.back-img': {
      width: '100%',
      height: 'auto',
    },

    '.main-box': {
      display: 'flex',
      width: '100%',
      height: '100%',
      paddingLeft: '12rem',
    },

    '.form-container': {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      height: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
    },

    '.person-img': {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
    },

    '.person-img-box': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
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
      height: '100vh',
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
      paddingTop: '35px',
    },

    '.logo-box': {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1rem',
    },

    '.button-grid': {
      marginLeft: '8px',
      marginRight: '8px',
      marginTop: '25px',
      height: '54px',
    },

    '.setup-account': {
      fontWeight: customTheme.fontWeights.light,
      fontSize: '13px',
      paddingBottom: '23px',
    },

    '.hr-wrapper': {
      position: 'relative',
      textAlign: 'center',
      marginTop: '25px',
    },

    '.hr-left, .hr-right': {
      position: 'absolute',
      top: '50%',
      width: '33%',
      border: 'none',
      borderTop: '1px solid black',
      opacity: '0.1',
    },

    '.hr-left': {
      left: '10px',
    },

    '.hr-right': {
      right: '10px',
    },

    '.text-text': {
      display: 'inline-block',
      opacity: '0.5',
      fontSize: '14px',
      fontFamily: customTheme.fonts.mainFont,
      fontWeight: '400',
      padding: '0 10px',
      position: 'relative',
      top: '6px',
    },

    '.card-card': {
      paddingTop: '400px',
    },

    '.logo-btn': {
      borderRadius: '15px',
      width: '95px',
      height: '60px',

      '& > img': {
        width: '2rem',
        height: '2rem',
      },
    },

    '.logo-btn-google': {
      marginRight: '6px',
    },

    '.logo-btn-apple': {
      marginLeft: '6px',
    },

    '.have-account-text': {
      opacity: '0.5',
      fontSize: '15px',
    },

    '.display-flex': {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '.show-top': {
      zIndex: '100',
    },

    '.row-gap': {
      width: '100%',
      height: '100%',
    },

    '.border-radius-100': {
      borderRadius: '100px',
    },
  }
})
