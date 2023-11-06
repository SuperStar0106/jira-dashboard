import React from 'react'
import {
  Box,
  type BoxProps,
  Typography,
  Grid,
  Button,
  Container,
} from '@mui/material'
import { MainViewStyle } from './index.style'
import { CardComponent, ButtonComponent, InputComponent } from '../../common'
import { IMAGE, PATH } from '../../../consts'
import {
  PermIdentityOutlined,
  EmailOutlined,
  LockOutlined,
} from '@mui/icons-material'

type MainViewProps = BoxProps

export const MainView: React.FC<MainViewProps> = () => {
  return (
    <MainViewStyle>
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
                  Create an account
                </Typography>
                <Typography className="typo-text setup-account">
                  Setup a new account in a minute.
                </Typography>
                <Grid container className="input-container">
                  <Grid item xs={12}>
                    <InputComponent
                      icon={<PermIdentityOutlined />}
                      placeholder="Username"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputComponent
                      icon={<EmailOutlined />}
                      placeholder="Email Address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputComponent
                      icon={<LockOutlined />}
                      placeholder="Password"
                      isPassword={true}
                    />
                  </Grid>
                  <Grid className="button-grid" item xs={12}>
                    <ButtonComponent type="submit">Sign Up</ButtonComponent>
                  </Grid>
                  <Grid className="hr-wrapper" item xs={12}>
                    <hr className="hr-left" />
                    <Typography className="text-text">
                      or Sign up with
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
                      Already have an account?
                    </Typography>
                    &nbsp;
                    <Typography>
                      <a
                        href={PATH.SIGNIN}
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          textDecoration: 'none',
                        }}
                      >
                        Sign In
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </CardComponent>
            </Box>
          </Box>
        </Box>
      </Container>
    </MainViewStyle>
  )
}
