import { useContext, useEffect, useState } from 'react'
import { Context } from './Context'

export function useStore() {
  const store = useContext(Context)
  return store
}

export function useSelector(selector) {
  const store = useStore()
  const [state, setState] = useState(() => selector(store.getState()))

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const nextState = selector(store.getState())
      if (nextState !== state) setState(nextState)
    })

    return unsubscribe
  }, [selector, state, store])

  return state
}

export function useDispatch() {
  const store = useStore()
  return store.dispatch
}
