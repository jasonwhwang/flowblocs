const defaultState = {
  list: ['I am happy', 'I will enjoy everyday of my life', 'I win everyday', 'I take massive action', 'I will do whatever it takes']
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_LIST':
      return {
        ...state,
        list: action.list
      }
    default:
      return state;
  }
}