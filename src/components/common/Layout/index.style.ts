import { styled, type StyledComponentProps } from '@mui/material'
import { type CustomTheme } from '../../../styles/type'

type LayoutComponentStyleProps = StyledComponentProps

export const LayoutComponentStyle = styled('div')<LayoutComponentStyleProps>(({
  theme,
}) => {
  const customTheme = theme as CustomTheme

  return {
    width: '100%',
    position: 'fixed',
    top: '0px',
    bottom: '0px',

    backgroundColor: customTheme.colors.white,
  }
})

export const ContentSection = styled('div')(({ theme }) => {
  const customTheme = theme as CustomTheme

  return {
    backgroundColor: customTheme.colors.primaryGray10,
    marginTop: '72px',
    marginBottom: '60px',
    marginLeft: '82px',
    paddingTop: '35px',
    height: 'calc(100% - 72px)',
    overflow: 'auto',
  }
})
