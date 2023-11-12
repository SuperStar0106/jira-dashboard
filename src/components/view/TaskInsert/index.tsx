import React from 'react'
import { useNavigate } from 'react-router'
import {
  Box,
  type BoxProps,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material'
import { TaskInsertViewStyle } from './index.style'
import { WithLayout, ButtonComponent, InputComponent } from '../../common'
import { PATH } from '../../../consts'

type TaskInsertViewProps = BoxProps

const TaskInsertComponent: React.FC<TaskInsertViewProps> = () => {
  const navigate = useNavigate()

  return (
    <TaskInsertViewStyle>
      <Container maxWidth="xl">
        <Box sx={{ marginTop: '8px' }}>
          <Typography className="title-text">Create a Board</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <Box className="ticket-box">
            <Card className="ticket-card">
              <CardContent>
                <Box className="ticket-type-box">
                  <Typography className="label-txt">
                    Board Title &nbsp; <span style={{ color: 'red' }}>*</span>
                  </Typography>
                  <InputComponent />
                </Box>
                <Box className="add-list-btn-box">
                  <ButtonComponent
                    className="add-list-btn"
                    onClick={() => {
                      navigate(PATH.ITEMINSERT)
                    }}
                  >
                    Create a Board
                  </ButtonComponent>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </TaskInsertViewStyle>
  )
}

export const TaskInsertView: React.FC = WithLayout(TaskInsertComponent)
