
import './App.css'
import Cookie from './component/Cookie'
import phrases from '../src/data/phrases.json'
import FondosImages from '../src/utils/FondosImages'
import { useState } from 'react'

function App() {

  const [index, setIndex] = useState(0)

  
  const changeIndex = () => {
    
    const aux = phrases.length
    setIndex(Math.floor(Math.random() * aux))
  }
  
  const fia= FondosImages.length

  const fiaux = Math.floor(Math.random()* fia)

  document.body.style = `background: url(${FondosImages[fiaux]})`

  return (
    <>
    <div className='cookie-card'>
      <Cookie

        data={phrases[index]}
        back={FondosImages[fiaux]}

      />
      <button onClick={() => changeIndex()}
      className='btn-cookie'
      >
        Luck
      </button>
    </div>
    </>
  )
}

export default App
