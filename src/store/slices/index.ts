import ticketsSlice, { ticketsAction } from './tickets.slice'

export const Slices = { tickets: ticketsSlice.reducer }

export const Actions = {
  tickets: ticketsAction,
}
