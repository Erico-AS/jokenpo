import './App.css'

import confronto from './models/confronto'
import { useState } from 'react'


function App() {
  let [ganhador, setGanhador] = useState('')

  window.addEventListener('load', () =>{
    let botoes = document.getElementsByClassName('botoes')
    
    for (let btn of botoes) {
      console.log(btn)
      btn.addEventListener('click', () => {
        confronto(btn, setGanhador)
      })
    }
  })

  return (
    <>
      <h1>{ganhador}</h1>
      <main>
        <div id="conjunto">
          <button id="papel" className="botoes">
            <div id="papel-img" className="backs"></div>
          </button>
          <button id="pedra" className="botoes">
            <div id="pedra-img" className="backs"></div>
          </button>
          <button id="tesoura" className="botoes">
            <div id="tesoura-img" className="backs"></div>
          </button>
        </div>
      </main>
    </>
  )
}

export default App
