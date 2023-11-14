import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, AppActions, type RootState } from '../../store'
import { TaskInsertView } from '../../components/view'
import { type Board } from '../../models'

export const TaskInsertContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { boards } = useSelector((state: RootState) => state.tickets)

  const handleAddBoard = (board: Pick<Board, 'title' | 'lists'>): void => {
    dispatch(AppActions.tickets.addBoard(board))
  }

  return <TaskInsertView boards={boards} addBoard={handleAddBoard} />
}
