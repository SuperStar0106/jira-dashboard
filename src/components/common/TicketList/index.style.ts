import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'

type TicketListComponentStyleProps = StyledComponentProps

export const TicketListComponentStyle = styled(
  'div'
)<TicketListComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'flex',
    width: '100%',
    height: '100%',

    '.progress-box': {},

    '.progress-card': {
      color: '#BDBDBD',
      width: '235px',
      height: '54px',
      backgroundColor: customTheme.colors.white,
      borderRadius: '10px',
      paddingLeft: '5px',
      paddingRight: '10px',

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
      },
    },

    '.progress-icon-btn': {
      backgroundColor: '#ebecfb',
    },

    '.progress-icon': {
      color: customTheme.colors.primaryBlue00,
    },

    '.justify-content-center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
})
