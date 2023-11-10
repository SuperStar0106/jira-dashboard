import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'

type TicketListComponentStyleProps = StyledComponentProps

export const TicketListComponentStyle = styled(
  'div'
)<TicketListComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'block',
    width: '100%',
    height: '100%',

    '.progress-box': {},

    '.progress-card': {
      color: '#BDBDBD',
      width: '235px',
      height: '54px',
      backgroundColor: customTheme.colors.white,
      borderRadius: '10px',

      '& .MuiCardHeader-title': {
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
      },

      '& .css-1drgtl0-MuiButtonBase-root-MuiIconButton-root': {
        width: '24px',
        height: '24px',
        borderRadius: '5px',
      },

      '& .css-1ssile9-MuiCardHeader-avatar': {
        marginRight: '5px',
      },

      '& .css-sgoict-MuiCardHeader-action': {
        marginTop: '0px',
        marginRight: '0px',
      },
    },

    '.progress-icon-btn': {
      backgroundColor: '#ebecfb',
    },

    '.progress-icon': {
      color: customTheme.colors.primaryBlue00,
    },

    '.ticket-box': {
      marginTop: '10px',
    },

    '.ticket-card': {
      color: '#BDBDBD',
      width: '235px',
      backgroundColor: customTheme.colors.white,
      borderRadius: '10px',

      '&:hover': {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      },

      '& .MuiCardContent-root': {
        paddingLeft: '14px',
        paddingRight: '14px',
        paddingTop: '16px',
        paddingBottom: '16px',
      },
    },

    '.ticket-type-box': {},

    '.ticket-type-btn': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
      paddingLeft: '10px',
      paddingRight: '10px',
      height: '22px',
      fontFamily: 'DM Sans',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      borderRadius: '4px',
    },

    '.ticket-img-box': {
      width: '100%',
      marginTop: '15px',
      height: '110px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '10px',
    },

    '.ticket-heading-title': {
      color: '#232360',
      fontFamily: 'DM Sans',
      fontSize: '13px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },

    '.ticket-description': {
      color: '#768396',
      fontFamily: 'DM Sans',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
    },

    '.justify-content-center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    ul: {
      listStyle: 'none',
      paddingLeft: '5px',
    },
    '.box': {
      width: '200px',
      height: '50px',
      marginBottom: '5px',
    },
    '.red': {
      background: 'red',
    },
    '.green': {
      background: 'green',
    },
  }
})
