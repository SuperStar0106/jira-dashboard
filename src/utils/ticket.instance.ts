import { type ListReceive, type List } from '../models'

export const getListData = (listIds: string[], lists: ListReceive): List[] => {
  const result: List[] = listIds.map((listId) => lists.byId[listId])

  return result
}
