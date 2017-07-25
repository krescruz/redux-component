function projects(state=[], action) {
  switch(action.type) {
    case 'RECEIVE_POSTS':
      return action.data
    default:
      return state;
  }
}

export default projects;
