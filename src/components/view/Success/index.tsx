import React from 'react'
import { Box, type BoxProps, Typography, Grid, Container } from '@mui/material'
import { SuccessViewStyle } from './index.style'
import { CardComponent, ButtonComponent } from '../../common'
import { CheckCircleOutlined } from '@mui/icons-material'
import { IMAGE } from '../../../consts'

type SuccessViewProps = BoxProps

export const SuccessView: React.FC<SuccessViewProps> = () => {
  return (
    <SuccessViewStyle>
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
                <CheckCircleOutlined
                  className="tick-icon"
                  style={{ fontSize: 130, width: '100%', color: '#38D361' }}
                />
                <Grid container className="input-container">
                  <Grid item xs={12} className="display-flex">
                    <Typography
                      className="typo-text setup-account"
                      sx={{ width: '252px', textAlign: 'center' }}
                    >
                      Your Password has been reset Successfully
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
              </CardComponent>
            </Box>
          </Box>
        </Box>
      </Container>
    </SuccessViewStyle>
  )
}
