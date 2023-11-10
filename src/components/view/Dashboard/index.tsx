import React from 'react'
import { Box, type BoxProps, Container, Typography } from '@mui/material'
import { DashboardViewStyle } from './index.style'
import { WithLayout, TicketListComponent } from '../../common'

type DashboardViewProps = BoxProps

const DashboardComponent: React.FC<DashboardViewProps> = () => {
  return (
    <DashboardViewStyle>
      <Container maxWidth="xl">
        <Box>
          <Typography className="url-text">Projects &gt; My Tasks</Typography>
        </Box>
        <Box>
          <Typography className="title-text">My Tasks</Typography>
        </Box>
        <Box>
          <TicketListComponent progressTitle="Backlog (20)" />
        </Box>
      </Container>
    </DashboardViewStyle>
  )
}

export const DashboardView: React.FC = WithLayout(DashboardComponent)
