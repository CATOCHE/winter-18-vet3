import { CHANGE_SEARCH_CRITERIA } from '../constants'

const searchCriteria = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_CRITERIA:
      return action.payload
    default:
      return state
  }
}

export default searchCriteria
