import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { darkTheme } from './styles'
import {
  SignUpPage,
  SignInPage,
  ForgetPwdPage,
  VerificationPage,
  SuccessPage,
} from './pages'
import { PATH } from './consts'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.SIGNUP} element={<SignUpPage />}></Route>
          <Route path={PATH.SIGNIN} element={<SignInPage />}></Route>
          <Route path={PATH.FORGETPWD} element={<ForgetPwdPage />}></Route>
          <Route
            path={PATH.VERIFICATION}
            element={<VerificationPage />}
          ></Route>
          <Route path={PATH.SUCCESS} element={<SuccessPage />}></Route>
          <Route path={PATH.DASHBOARD} element={<h1>DashBoard</h1>}></Route>
          <Route path="*" element={<Navigate to={PATH.SIGNUP} />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
