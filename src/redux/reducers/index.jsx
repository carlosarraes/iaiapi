const INITIAL_STATE = {
  data: {
    name: '',
    url: ''
  }
}

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default apiReducer
