import React, { useEffect } from 'react'
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
import {
  WithLayout,
  ButtonComponent,
  InputComponent,
  ListHeaderComponent,
} from '../../common'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { type BoardReceive, type Board } from '../../../models'
import { PATH } from '../../../consts'

type TaskInsertViewProps = BoxProps & {
  boards: BoardReceive
  addBoard: (board: Pick<Board, 'title' | 'lists'>) => void
}

const defaultValues: Pick<Board, 'title'> = {
  title: '',
}

const schema = Yup.object().shape({
  title: Yup.string().required(),
})

const TaskInsertComponent: React.FC<TaskInsertViewProps> = (props) => {
  const { boards, addBoard } = props
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<Pick<Board, 'title'>>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  useEffect(() => {
    console.log(boards)
  }, [])

  const onSubmitHandler = (data: Pick<Board, 'title'>): void => {
    const newData: Pick<Board, 'title' | 'lists'> = {
      ...data,
      lists: [],
    }
    addBoard(newData)
    reset()
    navigate(PATH.ITEMINSERT)
  }

  return (
    <TaskInsertViewStyle>
      <Container maxWidth="xl">
        <Box sx={{ marginTop: '8px' }}>
          <Typography className="title-text">Create a Board</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          {Object.values(boards.byId).map((board, index) => {
            return (
              <Box className="ticket-box" key={index}>
                <ListHeaderComponent title={board.title} />
              </Box>
            )
          })}
          <Box className="ticket-box">
            <Card className="ticket-card">
              <CardContent>
                <form
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <Box className="ticket-type-box">
                    <Typography className="label-txt">
                      Board Title &nbsp; <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <InputComponent
                      name="title"
                      register={register}
                      value={watch().title}
                      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                      error={!!errors.title}
                    />
                  </Box>
                  <Box className="add-list-btn-box">
                    <ButtonComponent
                      type="submit"
                      className="add-list-btn"
                      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                      disabled={!isValid}
                    >
                      Create a Board
                    </ButtonComponent>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </TaskInsertViewStyle>
  )
}

export const TaskInsertView: React.FC<TaskInsertViewProps> =
  WithLayout(TaskInsertComponent)
