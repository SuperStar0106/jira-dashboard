import React from 'react'
import { Box, type BoxProps, Typography, Grid, Container } from '@mui/material'
import { ForgetPwdViewStyle } from './index.style'
import { CardComponent, ButtonComponent, InputComponent } from '../../common'
import { IMAGE } from '../../../consts'
import { EmailOutlined } from '@mui/icons-material'

type ForgetPwdViewProps = BoxProps

export const ForgetPwdView: React.FC<ForgetPwdViewProps> = () => {
  return (
    <ForgetPwdViewStyle>
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
                  Forgot Password
                </Typography>
                <Typography className="typo-text setup-account">
                  Enter your email. We will send you 4 digit Code
                </Typography>
                <Grid container className="input-container">
                  <Grid item xs={12}>
                    <InputComponent
                      icon={<EmailOutlined />}
                      placeholder="Enter your Email Address"
                    />
                  </Grid>
                  <Grid className="button-grid" item xs={12}>
                    <ButtonComponent
                      type="submit"
                      className="row-gap border-radius-100"
                    >
                      Continue
                    </ButtonComponent>
                  </Grid>
                </Grid>
              </CardComponent>
            </Box>
          </Box>
        </Box>
      </Container>
    </ForgetPwdViewStyle>
  )
}
