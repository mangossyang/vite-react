import { useState } from 'react'
import HomePage from './pages/HomePage'
import ReduxPage from './pages/ReduxPage'
import ReduxHookPage from './pages/ReduxHookPage'
import './App.css'
import { Provider } from './YReact-redux'
import store from './YReact-redux/store'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Provider store={store}>
        <ReduxHookPage />
      </Provider>
    </div>
  )
}

export default App
