import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    // console.log('value is added ',counter)
    if (counter >= 20) {
      alert('you have reached the limit')
    }
    else {
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter <= 0) {
      alert('you have reached the limit')
    } else {
      setCounter(counter - 1)
    }

  }
  return (
    <>
      <h1>Chai aur React </h1>
      <h3>Counter Value: {counter}</h3>
      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
