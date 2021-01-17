import { RECEIVE_DATA } from '../actions/types'

export const loading = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA :
      return false
    default:
      return state
  }
}