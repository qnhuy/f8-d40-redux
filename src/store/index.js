import Redux from '../libs/redux'
import taskReducer from './reducers/taskReducer'

const store = Redux.createStore(taskReducer)

export default store
