import React from 'react'
import { TicketListComponentStyle } from './index.style'
import { ButtonComponent } from '../Button'
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material'
import { AddOutlined, FiberManualRecord } from '@mui/icons-material'

import ticketImg from '../../../assets/images/dashboard/ticket_imgs/img1.jpg'
interface TicketListComponentProps {
  progressTitle: string
}

export const TicketListComponent: React.FC<TicketListComponentProps> = () => {
  return (
    <TicketListComponentStyle>
      <Box className="progress-box">
        <Card className="progress-card justify-content-center">
          <CardHeader
            avatar={<FiberManualRecord sx={{ width: '10px' }} />}
            action={
              <IconButton className="progress-icon-btn" aria-label="add">
                <AddOutlined className="progress-icon" />
              </IconButton>
            }
            title="Backlog (20)"
            sx={{ width: '100%' }}
          ></CardHeader>
        </Card>
      </Box>
      <Box className="ticket-box">
        <Card className="ticket-card">
          <CardContent>
            <Box className="ticket-type-box">
              <ButtonComponent
                sx={{ backgroundColor: 'green' }}
                className="ticket-type-btn"
              >
                Visual
              </ButtonComponent>
            </Box>
            <Box
              className="ticket-img-box justify-content-center"
              sx={{ backgroundImage: `url(${ticketImg})` }}
            ></Box>
            <Box sx={{ marginTop: '15px' }}>
              <Typography
                className="ticket-heading-title"
                sx={{ marginTop: '15px' }}
              >
                Heading title
              </Typography>
              <Typography
                className="ticket-description"
                sx={{ marginTop: '7px' }}
              >
                Lorem ipsum sit dolor amet ipsum
              </Typography>
            </Box>
            <Box className="ticket-type-box">
              <ButtonComponent
                className="ticket-type-btn"
                sx={{
                  color: '#333',
                  backgroundColor: '#E8E7E7',
                  marginTop: '15px',
                }}
              >
                July 10, 2023
              </ButtonComponent>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box className="ticket-box">
        <Card className="ticket-card">
          <CardContent>
            <Box className="ticket-type-box">
              <ButtonComponent
                sx={{ backgroundColor: 'green' }}
                className="ticket-type-btn"
              >
                Visual
              </ButtonComponent>
            </Box>
            <Box
              className="ticket-img-box justify-content-center"
              sx={{ backgroundImage: `url(${ticketImg})` }}
            ></Box>
            <Box sx={{ marginTop: '15px' }}>
              <Typography
                className="ticket-heading-title"
                sx={{ marginTop: '15px' }}
              >
                Heading title
              </Typography>
              <Typography
                className="ticket-description"
                sx={{ marginTop: '7px' }}
              >
                Lorem ipsum sit dolor amet ipsum
              </Typography>
            </Box>
            <Box className="ticket-type-box">
              <ButtonComponent
                className="ticket-type-btn"
                sx={{
                  color: '#333',
                  backgroundColor: '#E8E7E7',
                  marginTop: '15px',
                }}
              >
                July 10, 2023
              </ButtonComponent>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </TicketListComponentStyle>
  )
}
