// import { Board, List, Item } from "../../types";
import { type Board, type List } from '../../models'

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

export type GetTicketByBoardIdRequestPayload = Pick<Board, 'title'>
