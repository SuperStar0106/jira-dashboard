// import { Board, List, Item } from "../../types";

export type GetTicketRequestPayload = undefined

export type GetBoardsRequestPayload = undefined
export interface GetListsRequestPayload {
  boardId: string
}
export interface GetItemsRequestPayload {
  listId: string
}
