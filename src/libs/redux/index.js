const Redux = {
  __DO_NOT_USE_ActionTypes: '@@redux/huynqINIT.1.0.0.1',
  createStore(reducer, initState) {
    let state = reducer(initState, this.__DO_NOT_USE_ActionTypes)
    let listeners = []

    return {
      dispatch(action) {
        state = reducer(state, action)
        console.log(state)
        listeners.forEach((listener) => listener())
      },

      getState() {
        return state
      },

      subscribe(newListener) {
        if (typeof newListener === 'function') {
          listeners.push(newListener)
        }
        return function unsubscribe() {
          listeners = listeners.filter((listener) => listener !== newListener)
        }
      },
    }
  },
}

export default Redux
