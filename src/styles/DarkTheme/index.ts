import { createTheme } from '@mui/material/styles'

const themeColors = {
  colors: {
    primary00: '#C3C3C3',
    primary10: '#5845CC',
    primary20: '#4738A6',
    primary40: '#575DFB',
    primary60: '#261E59',
    primary80: '#161133',

    primaryLight80: '#C5CFE4',
    primaryLight60: '#A196F6',
    primaryLight40: '#BDB6F7',
    primaryLight20: '#D9D8F8',
    primaryLight10: '#E7E9F9',
    primaryLight00: '#C5C5C5',

    primaryGray00: '#A0AAB4',

    successLight: '#E3F2E0',
    successMedium: '#8DC881',
    successDark: '#459A33',

    informLight: '#EBF7F6',
    informMedium: '#C0ECE8',
    informDark: '#71C9C1',

    warningLight: '#F8F3D8',
    warningMedium: '#E2CA64',
    warningDark: '#C9A81C',

    errorLight: '#FF4557',
    errorMedium: '#FF4557',
    errorDark: '#FF4557',

    white: '#ffffff',
  },
}

const themeFonts = {
  fonts: {
    mainFont: 'Poppins',
  },

  fontWeights: {
    semibold: 800,
    regular: 700,
    light: 400,
  },
}

export const darkTheme = createTheme({
  ...themeColors,
  ...themeFonts,
  palette: {
    mode: 'dark',
  },
})
