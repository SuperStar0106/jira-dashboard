import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './styles'
import { MainPage } from './pages'
import { PATH } from './consts'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAIN} element={<MainPage />}></Route>
          <Route path="*" element={<Navigate to={PATH.MAIN} />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
