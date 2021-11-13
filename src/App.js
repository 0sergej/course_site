import React, {useState} from 'react'
import Counter from './Components/CounterClass'
import CounterHooks from './Components/CounterHooks'

export const  ThemeContext = React.createContext()

function App() {
  // console.log('Render App')
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      Counter
      <Counter initailCount={0} />
      CounterHooks
      <CounterHooks initailCount={0} />
      <br />
      <button onClick={() => setTheme(prevTheme =>
      {
        return prevTheme === 'red' ? 'blue' : 'red'})} > Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;