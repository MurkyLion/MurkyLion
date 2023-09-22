import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Projects/>
    </>
  )
}

export default App
