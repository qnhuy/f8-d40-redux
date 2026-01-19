import { createContext } from 'react'

const Context = createContext()

function Provider({ store, children }) {
  return <Context value={store}>{children}</Context>
}

export { Context, Provider }
