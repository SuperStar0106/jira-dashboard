import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'

type ItemInsertViewStyleProps = StyledComponentProps

export const ItemInsertViewStyle = styled('div')<ItemInsertViewStyleProps>(({
  theme,
}) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'flex',
    width: '100%',
    height: '100%',
    userSelect: 'none',

    '.title-text': {
      fontSize: '36px',
      color: '#252C32',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '48px',
      maxWidth: '1440px',
    },

    '.ticket-card': {
      minWidth: '235px',
      borderRadius: '12px',
      backgroundColor: customTheme.colors.white,
    },

    '.ticket-box': {
      marginTop: '32px',
    },

    '.add-list-btn': {
      color: 'white',
      backgroundColor: '#575DFB',
      paddingTop: '10px',
      paddingBottom: '10px',
      width: '100px',
      marginLeft: '10px',
    },

    '.label-txt': {
      marginLeft: '10px',
      marginRight: '8px',
      color: '#232360',
      fontFamily: 'Roboto',
      fontSize: '13px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },

    '.add-list-btn-box': {
      marginTop: '10px',
    },
  }
})
