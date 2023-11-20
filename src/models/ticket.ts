export interface Item {
  id: string
  title: string
  content?: string
}

export interface List {
  id: string
  title: string
  items: string[]
}

export interface Board {
  id: string
  title: string
  lists: string[]
}

export interface ItemReceive {
  byId: Record<string, Item>
  allIds: string[]
}
export interface ListReceive {
  byId: Record<string, List>
  allIds: string[]
}
export interface BoardReceive {
  byId: Record<string, Board>
  allIds: string[]
}

export interface newIds {
  newBoardId: string
  newListId: string
  newItemId: string
}

export interface Ticket {
  newIds: newIds
  boards: BoardReceive
  lists: ListReceive
  items: ItemReceive
}
