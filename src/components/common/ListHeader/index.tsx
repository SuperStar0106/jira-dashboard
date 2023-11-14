import React from 'react'
import { ListHeaderComponentStyle } from './index.style'
import { Card, CardHeader, IconButton } from '@mui/material'
import { FiberManualRecord, AddOutlined } from '@mui/icons-material'

interface ListHeaderComponentProps {
  title: string
}

export const ListHeaderComponent: React.FC<ListHeaderComponentProps> = (
  props
) => {
  const { title } = props

  return (
    <ListHeaderComponentStyle>
      <Card className="progress-card justify-content-center">
        <CardHeader
          avatar={<FiberManualRecord sx={{ width: '10px' }} />}
          action={
            <IconButton className="progress-icon-btn" aria-label="add">
              <AddOutlined className="progress-icon" />
            </IconButton>
          }
          title={title}
          sx={{ width: '100%' }}
        ></CardHeader>
      </Card>
    </ListHeaderComponentStyle>
  )
}
