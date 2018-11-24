const defaultState = {
  schedule: [{ title: 'Wake Up', startHour: 9, startMin: 0, endHour: 9, endMin: 15, location: 'Bed', description: 'Wake up and make breakfast', weekly: true, notification: true},
            { title: 'Breakfast', startHour: 9, startMin: 15, endHour: 9, endMin: 30, location: 'Room', description: 'Cook a healthy meal', weekly: true, notification: true},
            { title: 'Sleep', startHour: 23, startMin: 45, endHour: 23, endMin: 59, location: 'Room', description: 'Sleep Early', weekly: true, notification: true}]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SCHEDULE':
      return {
        ...state,
        schedule: action.schedule
      }
    default:
      return state;
  }
}