import React from 'react'
import {
  Box,
  type BoxProps,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material'
import { ItemInsertViewStyle } from './index.style'
import { WithLayout, ButtonComponent, InputComponent } from '../../common'

type ItemInsertViewProps = BoxProps

const ItemInsertComponent: React.FC<ItemInsertViewProps> = () => {
  return (
    <ItemInsertViewStyle>
      <Container maxWidth="xl">
        <Box sx={{ marginTop: '8px' }}>
          <Typography className="title-text">UI Changes</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <Box className="ticket-box">
            <Card className="ticket-card">
              <CardContent>
                <Box className="ticket-type-box">
                  <Typography className="label-txt">
                    Enter List Title &nbsp;{' '}
                    <span style={{ color: 'red' }}>*</span>
                  </Typography>
                  <InputComponent />
                </Box>
                <Box className="add-list-btn-box">
                  <ButtonComponent className="add-list-btn">
                    Add List
                  </ButtonComponent>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </ItemInsertViewStyle>
  )
}

export const ItemInsertView: React.FC = WithLayout(ItemInsertComponent)
