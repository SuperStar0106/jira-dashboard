import { styled, type StyledComponentProps } from '@mui/material'
// import { type CustomTheme } from '../../../styles/type'

type ModalComponentStyleProps = StyledComponentProps

export const ModalComponentStyle = styled('div')<ModalComponentStyleProps>(({
  theme,
}) => {
  // const customTheme = theme as CustomTheme
  return {
    '.dialog': {
      '& .MuiDialog-paper': {
        backgroundColor: 'white',
        minWidth: '673px',
        borderRadius: '12px',
        border: '1px solid #E6E5E5',
      },
      '& .MuiDialogTitle-root': {
        color: '#252C32',
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '48px',
        letterSpacing: '-0.616px',
      },
      '& .MuiDialogContent-root': {
        paddingLeft: '10px',
        paddingRight: '10px',
      },
    },
  }
})
