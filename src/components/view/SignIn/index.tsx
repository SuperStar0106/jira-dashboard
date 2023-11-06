import React from 'react'
import {
  Box,
  type BoxProps,
  Typography,
  Grid,
  Button,
  Container,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { SignInViewStyle } from './index.style'
import { CardComponent, ButtonComponent, InputComponent } from '../../common'
import { IMAGE, PATH } from '../../../consts'
import { EmailOutlined, LockOutlined } from '@mui/icons-material'

type SignInViewProps = BoxProps

export const SignInView: React.FC<SignInViewProps> = () => {
  return (
    <SignInViewStyle>
      <Box className="back-box">
        <img className="back-img" src={IMAGE.Main.backImg} />
      </Box>
      <Container maxWidth="xl" className="form-container">
        <Box className="main-box">
          <Box className="person-img-box">
            <img src={IMAGE.Main.personImg} className="person-img" />
          </Box>
          <Box className="display-flex show-top">
            <Box className="inside-form-box">
              <Box className="logo-box">
                <img src={IMAGE.Main.logoImg} alt="back-img" />
              </Box>
              <CardComponent className="card-card">
                <Typography className="typo-text create-account">
                  Login into account
                </Typography>
                <Typography className="typo-text setup-account">
                  Use your credentials to access your account.
                </Typography>
                <Grid container className="input-container">
                  <Grid item xs={12}>
                    <InputComponent
                      icon={<EmailOutlined />}
                      placeholder="Enter your Email Address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputComponent
                      icon={<LockOutlined />}
                      placeholder="Password"
                      isPassword={true}
                    />
                  </Grid>
                  <Grid item xs={12} className="remember-me-grid display-flex">
                    <FormControlLabel
                      control={<Checkbox sx={{ color: '#666' }} />}
                      label="Remember Me"
                    />
                    <Typography>Forgot password?</Typography>
                  </Grid>
                  <Grid className="button-grid" item xs={12}>
                    <ButtonComponent type="submit">Sign In</ButtonComponent>
                  </Grid>
                  <Grid className="hr-wrapper" item xs={12}>
                    <hr className="hr-left" />
                    <Typography className="text-text">
                      or Login up with
                    </Typography>
                    <hr className="hr-right" />
                  </Grid>
                  <Grid className="hr-wrapper" item xs={12}>
                    <Button
                      variant="outlined"
                      className="logo-btn logo-btn-google"
                    >
                      <img src={IMAGE.Main.googleImg} />
                    </Button>
                    <Button
                      variant="outlined"
                      className="logo-btn logo-btn-appel"
                    >
                      <img src={IMAGE.Main.appleImg} />
                    </Button>
                  </Grid>
                  <Grid className="hr-wrapper display-flex" item xs={12}>
                    <Typography className="have-account-text">
                      Don&apos;t have an account?
                    </Typography>
                    &nbsp;
                    <Typography>
                      {' '}
                      <a
                        href={PATH.SIGNUP}
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          textDecoration: 'none',
                        }}
                      >
                        Sign up
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </CardComponent>
            </Box>
          </Box>
        </Box>
      </Container>
    </SignInViewStyle>
  )
}
