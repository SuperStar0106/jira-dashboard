import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import { type AppDispatch, AppActions, type RootState } from '../../store'
import { type RootState } from '../../store'
import { DashboardView } from '../../components/view'

export const DashboardContainer: React.FC = () => {
  // const dispatch = useDispatch<AppDispatch>()
  const { boards, lists, items } = useSelector(
    (state: RootState) => state.tickets
  )

  useEffect(() => {
    console.log('boards: ', boards)
    console.log('lists: ', lists)
    console.log('items: ', items)
  }, [])

  return <DashboardView boards={boards} lists={lists} items={items} />
}
