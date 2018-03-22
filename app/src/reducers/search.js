import { CHANGE_SEARCH_CRITERIA } from '../constants'
import { merge } from 'ramda'

const searchCriteria = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_CRITERIA:
      console.dir(merge(state, action.payload))
      return action.payload
    default:
      return state
  }
}

export default searchCriteria
