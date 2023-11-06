import React from 'react'
import { Card, CardContent, type CardProps } from '@mui/material'
import { CardComponentStyle } from './index.style'

type CardComponentProps = CardProps & {
  children?: React.ReactNode
}

export const CardComponent: React.FC<CardComponentProps> = ({ children }) => {
  return (
    <CardComponentStyle>
      <Card className="card">
        <CardContent sx={{ width: '100%' }}>{children}</CardContent>
      </Card>
    </CardComponentStyle>
  )
}
