import {
  type ListReceive,
  type List,
  type ItemReceive,
  type Item,
} from '../models'

export const getListData = (listIds: string[], lists: ListReceive): List[] => {
  const result: List[] = listIds.map((listId) => lists.byId[listId])

  return result
}

export const getItemData = (itemIds: string[], items: ItemReceive): Item[] => {
  const result: Item[] = itemIds.map((itemId) => items.byId[itemId])

  return result
}
