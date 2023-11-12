import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Tickets } from '../types'
import { type Ticket } from '../../types'

const initialState: Ticket = {
  boards: {
    byId: {
      board1: {
        id: 'board1',
        title: 'Board 1',
        lists: ['list1', 'list2', 'list3'],
      },
    },
    allIds: ['board1'],
  },
  lists: {
    byId: {
      list1: {
        id: 'list1',
        title: 'TODO',
        items: ['item1', 'item2', 'item3'],
      },
      list2: {
        id: 'list2',
        title: 'IN PROGRESS',
        items: ['item4', 'item5', 'item6'],
      },
      list3: {
        id: 'list3',
        title: 'PR TO BE REVIEWD',
        items: ['item7', 'item8', 'item9'],
      },
      list4: {
        id: 'list4',
        title: 'PO CHECK',
        items: ['item10', 'item11', 'item12'],
      },
      list5: {
        id: 'list5',
        title: 'TO BE RELEASED',
        items: ['item13', 'item14', 'item15'],
      },
      list6: {
        id: 'list6',
        title: 'DONE',
        items: ['item16', 'item17', 'item18'],
      },
    },
    allIds: ['list1', 'list2', 'list3', 'list4', 'list5', 'list6'],
  },
  items: {
    byId: {
      item1: {
        id: 'item1',
        content: 'Content 1',
      },
      item2: {
        id: 'item2',
        content: 'Content 2',
      },
      item3: {
        id: 'item3',
        content: 'Content 3',
      },
      item4: {
        id: 'item4',
        content: 'Content 4',
      },
      item5: {
        id: 'item5',
        content: 'Content 5',
      },
      item6: {
        id: 'item6',
        content: 'Content 6',
      },
      item7: {
        id: 'item7',
        content: 'Content 7',
      },
      item8: {
        id: 'item8',
        content: 'Content 8',
      },
      item9: {
        id: 'item9',
        content: 'Content 9',
      },
      item10: {
        id: 'item10',
        content: 'Content 10',
      },
      item11: {
        id: 'item11',
        content: 'Content 11',
      },
      item12: {
        id: 'item12',
        content: 'Content 12',
      },
      item13: {
        id: 'item13',
        content: 'Content 13',
      },
      item14: {
        id: 'item14',
        content: 'Content 14',
      },
      item15: {
        id: 'item15',
        content: 'Content 15',
      },
      item16: {
        id: 'item16',
        content: 'Content 16',
      },
      item17: {
        id: 'item17',
        content: 'Content 17',
      },
      item18: {
        id: 'item18',
        content: 'Content 18',
      },
    },
    allIds: [
      'item1',
      'item2',
      'item3',
      'item4',
      'item5',
      'item6',
      'item7',
      'item8',
      'item9',
      'item10',
      'item11',
      'item12',
      'item13',
      'item14',
      'item15',
      'item16',
      'item17',
      'item18',
    ],
  },
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    getTicketsListRequest(
      _state: Ticket,
      _action: PayloadAction<Tickets.GetTicketRequestPayload>
    ) {
      return initialState
    },
    getListsWithBoardId(
      state: Ticket,
      action: PayloadAction<Tickets.GetListsRequestPayload>
    ) {},
  },
})

export const ticketsAction = ticketsSlice.actions

export default ticketsSlice
