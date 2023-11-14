import React, { useEffect } from 'react'
import {
  Box,
  type BoxProps,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material'
import { ItemInsertViewStyle } from './index.style'
import {
  WithLayout,
  ButtonComponent,
  InputComponent,
  ListHeaderComponent,
} from '../../common'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  type newIds,
  type ListReceive,
  type BoardReceive,
  type List,
} from '../../../models'
import { type AddListRequestPayload } from '../../../store/types/tickets.type'
import { TicketUtils } from '../../../utils'

type ItemInsertViewProps = BoxProps & {
  newIds: newIds
  boards: BoardReceive
  lists: ListReceive
  addList: (List: AddListRequestPayload) => void
}

const defaultValues: Pick<List, 'title'> = {
  title: '',
}

const schema = Yup.object().shape({
  title: Yup.string().required(),
})

const ItemInsertComponent: React.FC<ItemInsertViewProps> = (props) => {
  const { newIds, boards, lists, addList } = props
  const listsByBoardId: List[] = TicketUtils.getListData(
    boards.byId[newIds.newBoardId].lists,
    lists
  )
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<Pick<List, 'title'>>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  useEffect(() => {
    console.log('newIds: ', newIds)
    console.log('lists: ', lists)
    console.log('boards: ', boards)
    console.log('addList: ', addList)

    console.log('Test: ', boards.byId[newIds.newBoardId])

    console.log(
      'listByBoardId: ',
      TicketUtils.getListData(boards.byId[newIds.newBoardId].lists, lists)
    )
  }, [])

  const onSubmitHandler = (data: Pick<List, 'title'>): void => {
    const newData: Pick<List, 'title' | 'items'> & { boardId: string } = {
      ...data,
      items: [],
      boardId: newIds.newBoardId,
    }
    addList(newData)
    reset()
  }

  return (
    <ItemInsertViewStyle>
      <Container maxWidth="xl">
        <Box sx={{ marginTop: '8px' }}>
          <Typography className="title-text">UI Changes</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          {Object.values(listsByBoardId).map((list, index) => {
            return (
              <Box className="ticket-box" key={index}>
                <ListHeaderComponent title={list.title} />
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
                      Enter List Title &nbsp;{' '}
                      <span style={{ color: 'red' }}>*</span>
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
                      Add List
                    </ButtonComponent>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </ItemInsertViewStyle>
  )
}

export const ItemInsertView: React.FC<ItemInsertViewProps> =
  WithLayout(ItemInsertComponent)
