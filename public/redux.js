const Redux = {
  __DO_NOT_USE_ActionTypes: '@@redux/huynqINIT.1.0.0.1',
  createStore(reducer, initState) {
    let currentState = reducer(initState, this.__DO_NOT_USE_ActionTypes)
    let listeners = []

    return {
      dispatch(action) {
        currentState = reducer(currentState, action)
        console.log(currentState)
        listeners.forEach((listener) => listener())
      },
      getState() {
        return currentState
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
