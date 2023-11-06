import { type StyledComponentProps, styled } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'

type ButtonComponentStyleProps = StyledComponentProps

export const ButtonComponentStyle = styled('button')<ButtonComponentStyleProps>(
  ({ theme, type, disabled }) => {
    const customTheme = theme as CustomTheme

    return {
      fontFamily: customTheme.fonts.mainFont,
      fontWeight: customTheme.fontWeights.light,
      width: '100%',
      height: '100%',

      backgroundColor:
        type === 'submit'
          ? disabled != null && disabled
            ? customTheme.colors.primary60
            : customTheme.colors.primary40
          : disabled != null && disabled
          ? customTheme.colors.primary40
          : customTheme.colors.primaryLight10,
      color:
        type === 'submit'
          ? disabled != null && disabled
            ? customTheme.colors.white
            : customTheme.colors.white
          : disabled != null && disabled
          ? customTheme.colors.white
          : customTheme.colors.white,
      border:
        type === 'submit'
          ? 'none'
          : `1px solid ${
              disabled != null && disabled
                ? customTheme.colors.disabledCancelButtonBorderColor
                : customTheme.colors.activeCancelButtonBorderColor
            }`,
      fontSize: '16px',
      borderRadius: type === 'submit' ? '100px' : '10px',
      borderWidth: '0px',
      cursor: 'pointer !important',
      // cursor: 'pointer !important',
      // disabled != null && disabled
      //   ? 'not-allowed !important'
      //   : 'pointer !important',
      boxSizing: 'border-box',
      textAlign: 'center',

      transition: 'all',
      transitionDuration: '1s',

      '&:hover': {
        backgroundColor: 'red',
        // disabled != null && disabled
        //   ? customTheme.colors.primary60
        //   : customTheme.colors.primary20,
      },
    }
  }
)
