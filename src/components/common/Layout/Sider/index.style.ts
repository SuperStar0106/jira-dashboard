import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../../styles/type'

type SiderSectionStyleProps = StyledComponentProps & {
  isButtonClicked: number | null
}

export const SiderSectionStyle = styled('div')<SiderSectionStyleProps>(({
  theme,
  isButtonClicked,
}) => {
  const customTheme = theme as CustomTheme

  return {
    display: 'block',
    justifyContent: 'center',
    backgroundColor: customTheme.colors.white,
    paddingTop: '16px',
    paddingBottom: '16px',

    position: 'absolute',
    top: '0px',
    width: '86px',
    height: '100%',

    '.display-flex': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '.logo_img': {
      width: '50px',
      height: '50px',
    },

    '.btn': {
      minWidth: '50px',
      height: '100%',
      borderRadius: '10px',
      padding: '0px',
      backgroundColor: customTheme.colors.white,
      color: '#5F6388',

      '&:hover': {
        backgroundColor: '#6772FE',
        color: '#5F6388',
      },
    },

    '.btn-selected': {
      backgroundColor: '#6772FE',
      color: customTheme.colors.white,
    },

    '.btn-box': {
      width: '100%',
      height: '55px',
      marginTop: '10px',
    },

    '.btn-box-selected': {
      '&::after': {
        content: '""',
        position: 'absolute',
        borderRadius: '15px 0px 0px 0px',
        width: '4px',
        height: '53px',
        right: '0px',
        backgroundColor: customTheme.colors.primaryBlue00,
      },
    },
  }
})
