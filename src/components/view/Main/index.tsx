import React from 'react'
import { Box, type BoxProps, Typography, Grid } from '@mui/material'
import { MainViewStyle } from './index.style'
import { CardComponent, ButtonComponent, InputComponent } from '../../common'
import { IMAGE } from '../../../consts'

type MainViewProps = BoxProps

export const MainView: React.FC<MainViewProps> = () => {
  return (
    <MainViewStyle>
      <img src={IMAGE.Main.personImg} className="person-img" alt="person-img" />
      <img src={IMAGE.Main.backImg} className="back-img" alt="back-img" />
      <Box className="form-box">
        <Box className="inside-form-box">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            <img src={IMAGE.Main.logoImg} alt="back-img" />
          </Box>
          <CardComponent sx={{ width: '100%' }} className="card-card">
            <Typography className="typo-text create-account">
              Create an account
            </Typography>
            <Typography className="typo-text setup-account">
              Setup a new account in a minute.
            </Typography>
            <Grid container className="input-container">
              <Grid item xs={12}>
                <InputComponent></InputComponent>
              </Grid>
              <Grid item xs={12}>
                <InputComponent></InputComponent>
              </Grid>
              <Grid item xs={12}>
                <InputComponent></InputComponent>
              </Grid>
            </Grid>
            <ButtonComponent type="submit">Sign Up</ButtonComponent>
          </CardComponent>
        </Box>
      </Box>
    </MainViewStyle>
  )
}
