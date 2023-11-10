import React, { useState } from 'react'
import { TicketListComponentStyle } from './index.style'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import { ModalComponent } from '../Modal'
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
  tickets: string[]
  droppableId: string
}

interface TicketComponentProps {
  ticketTitle: string
  index: number
}

export const TicketComponent: React.FC<TicketComponentProps> = ({
  ticketTitle,
  index,
}) => {
  return (
    <Draggable draggableId={ticketTitle} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
        </div>
      )}
    </Draggable>
  )
}

export const TicketListComponent: React.FC<TicketListComponentProps> = ({
  progressTitle,
  tickets,
  droppableId,
}) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <TicketListComponentStyle>
      <Box className="progress-box">
        <Card className="progress-card justify-content-center">
          <CardHeader
            avatar={<FiberManualRecord sx={{ width: '10px' }} />}
            action={
              <IconButton
                className="progress-icon-btn"
                onClick={handleClickOpen}
                aria-label="add"
              >
                <AddOutlined className="progress-icon" />
              </IconButton>
            }
            title={progressTitle}
            sx={{ width: '100%' }}
          ></CardHeader>
        </Card>
        <ModalComponent
          isOpen={open}
          modalTitle="Task"
          handleClose={handleClose}
        />
      </Box>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ minHeight: '100px' }}
          >
            {tickets.map((ticket, index) => (
              <TicketComponent
                ticketTitle={ticket}
                index={index}
                key={ticket}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </TicketListComponentStyle>
  )
}
