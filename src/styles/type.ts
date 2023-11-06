import { type Theme } from '@mui/material'

export interface ThemeColor {
  colors: Record<string, string>
}

export interface ThemeFont {
  fonts: Record<string, string>
  fontWeights: Record<string, string>
}

export interface CustomTheme extends Theme, ThemeColor, ThemeFont {}
