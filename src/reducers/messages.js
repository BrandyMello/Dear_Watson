export const messages = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return action.messages
    case 'CLEAR_MESSAGES':
      return action.messages
    default:
      return state;
  }
}
