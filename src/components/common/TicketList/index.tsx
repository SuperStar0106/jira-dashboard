import React from 'react'
import { TicketListComponentStyle } from './index.style'
import { Box, Card, CardHeader, IconButton } from '@mui/material'
import { AddOutlined, FiberManualRecord } from '@mui/icons-material'

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
    </TicketListComponentStyle>
  )
}
