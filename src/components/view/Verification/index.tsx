import React, { useState, useEffect } from 'react'
import { Box, type BoxProps, Typography, Grid, Container } from '@mui/material'
import { VerificationViewStyle } from './index.style'
import { CardComponent, ButtonComponent, InputComponent } from '../../common'
import { IMAGE } from '../../../consts'

type VerificationViewProps = BoxProps

export const VerificationView: React.FC<VerificationViewProps> = () => {
  const [time, setTime] = useState(30)

  useEffect(() => {
    if (time > 0) {
      const timerId = setTimeout(() => {
        setTime(time - 1)
      }, 1000)

      return () => {
        clearTimeout(timerId)
      }
    }
  }, [time])

  return (
    <VerificationViewStyle>
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
                  Verification
                </Typography>
                <Typography className="typo-text setup-account">
                  Please Enter 4 digits code that you have received
                </Typography>
                <Grid container className="input-container">
                  <Grid item xs={12} className="display-flex">
                    <Box sx={{ height: '79px' }}>
                      <InputComponent type="digital" />
                    </Box>
                    <Box sx={{ height: '79px' }}>
                      <InputComponent type="digital" />
                    </Box>
                    <Box sx={{ height: '79px' }}>
                      <InputComponent type="digital" />
                    </Box>
                    <Box sx={{ height: '79px' }}>
                      <InputComponent type="digital" />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className="display-flex"
                    sx={{ paddingTop: '18px', paddingBottom: '8px' }}
                  >
                    <Typography
                      sx={{
                        color: 'red',
                      }}
                    >
                      {time < 10 ? `00:0${time}` : `00:${time}`}
                    </Typography>
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
                <Grid className="hr-wrapper" item xs={12}>
                  <Typography className="text-text" sx={{ fontSize: '12px' }}>
                    If you didn&apos;t receive the code!{' '}
                    <a
                      style={{
                        color: 'red',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                      }}
                    >
                      Resend
                    </a>
                  </Typography>
                </Grid>
              </CardComponent>
            </Box>
          </Box>
        </Box>
      </Container>
    </VerificationViewStyle>
  )
}
