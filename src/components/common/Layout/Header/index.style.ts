import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../../styles/type'

type HeaderSectionStyleProps = StyledComponentProps

export const HeaderSectionStyle = styled('div')<HeaderSectionStyleProps>(({
  theme,
}) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'flex',
    width: 'calc(100% - 126px)',
    justifyContent: 'space-between',
    gap: '8px',
    alignItems: 'center',
    paddingLeft: '86px',
    paddingRight: '126px',
    backgroundColor: customTheme.colors.white,

    position: 'fixed',
    top: '0px',
    height: '72px',

    '.justify-content-center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '.create_btn': {
      borderRadius: '10px',
      fontSize: '14px',
      paddingLeft: '14px',
      paddingRight: '14px',
      maxHeight: '43px',
    },

    '.badge': {
      display: 'flex',
      justifyContent: 'center',
      '& .MuiBadge-badge': {
        backgroundColor: '#FF3030',
        color: 'white',
        fontSize: '15px',
        padding: '13px 5px',
        borderRadius: '100px',
        top: '7px',
        right: '7px',
      },
    },
  }
})
