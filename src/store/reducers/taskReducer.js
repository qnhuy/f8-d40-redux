const initState = {
  tasks: [],
  counter: 0,
}

export default function taskReducer(state = initState, action) {
  switch (action.type) {
    case 'SET_TASK':
      return { ...state, tasks: action.payload }
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    case 'INCREASE':
      return { ...initState, counter: ++initState.counter }
    default:
      return state
  }
}
