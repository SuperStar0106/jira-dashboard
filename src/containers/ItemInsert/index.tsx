import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ItemInsertView } from '../../components/view'
import { AppActions, type RootState, type AppDispatch } from '../../store'
import { type AddListRequestPayload } from '../../store/types/tickets.type'

export const ItemInsertContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { newIds, boards, lists } = useSelector(
    (state: RootState) => state.tickets
  )

  const handleAddList = (List: AddListRequestPayload): void => {
    dispatch(AppActions.tickets.addList(List))
  }

  return (
    <ItemInsertView
      newIds={newIds}
      boards={boards}
      lists={lists}
      addList={handleAddList}
    />
  )
}
