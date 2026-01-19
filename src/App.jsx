import AppRouter from './components/AppRouter'
import { Provider as ReduxProvider } from './libs/react-redux/Context'
import store from './store'

function App() {
  return (
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  )
}

export default App
