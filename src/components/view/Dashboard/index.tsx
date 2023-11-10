import React, { useState } from 'react'
import { Box, type BoxProps, Container, Typography } from '@mui/material'
import { DashboardViewStyle } from './index.style'
import { WithLayout, TicketListComponent } from '../../common'
import { DragDropContext } from '@hello-pangea/dnd'

type DashboardViewProps = BoxProps

type Tickets = Record<string, string[]>

const initialTickets: Tickets = {
  backlog: ['Ticket 1', 'Ticket 2'],
  inProgress: ['Ticket 3', 'Ticket 4'],
  done: ['Ticket 5', 'Ticket 6'],
}

const DashboardComponent: React.FC<DashboardViewProps> = () => {
  const [tickets, setTickets] = useState(initialTickets)

  const handleOnDragEnd = (result: any): void => {
    if (result.destination === null) return

    const sourceList = [...tickets[result.source.droppableId]]
    const destinationList = [...tickets[result.destination.droppableId]]
    const [draggedTicket] = sourceList.splice(result.source.index, 1)

    if (result.source.droppableId === result.destination.droppableId) {
      sourceList.splice(result.destination.index, 0, draggedTicket)
    } else {
      destinationList.splice(result.destination.index, 0, draggedTicket)
    }

    setTickets({
      ...tickets,
      [result.source.droppableId]: sourceList,
      [result.destination.droppableId]: destinationList,
    })
  }

  return (
    <DashboardViewStyle>
      <Container maxWidth="xl">
        <Box>
          <Typography className="url-text">Projects &gt; My Tasks</Typography>
        </Box>
        <Box sx={{ marginTop: '8px' }}>
          <Typography className="title-text">My Tasks</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {Object.entries(tickets).map(([id, tickets]) => (
              <Box sx={{ marginTop: '78px' }} key={id}>
                <TicketListComponent
                  key={id}
                  progressTitle="Backlog"
                  tickets={tickets}
                  droppableId={id}
                />
              </Box>
            ))}
          </DragDropContext>
        </Box>
      </Container>
    </DashboardViewStyle>
  )
}

export const DashboardView: React.FC = WithLayout(DashboardComponent)
