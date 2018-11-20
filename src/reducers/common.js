const defaultState = {
  requests: null,
  headerTab: 0,
  chatTab: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_REQUESTS':
      return {
        ...state,
        requests: action.error ? null : action.requests.results
      }
    case 'LOGOUT':
      return {
        ...state,
        requests: null
      }
    case 'HEADER_TAB':
      return {
        ...state,
        headerTab: action.headerTab
      }
    case 'CHAT_TAB':
      return {
        ...state,
        chatTab: action.chatTab
      }
    default:
      return state;
  }
}