import { type Board, type List, type Item } from '../../models'

export type GetTicketRequestPayload = undefined

export type GetBoardsRequestPayload = undefined
export interface GetListsRequestPayload {
  boardId: string
}
export interface GetItemsRequestPayload {
  listId: string
}

export type AddBoardRequestPayload = Pick<Board, 'title' | 'lists'>

export type AddListRequestPayload = Pick<List, 'title' | 'items'> & {
  boardId: string
}

export type AddItemRequestPayload = Pick<Item, 'title' | 'content'> & {
  listId: string
}

export type GetTicketByBoardIdRequestPayload = Pick<Board, 'title'>
