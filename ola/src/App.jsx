import { useEffect, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'

function App() {
  const [characters, setCharacters] = useState([])

  //estado para iniciar o termo buscado

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((res) => res.json())
      .then(setCharacters)
      .catch((err) => console.error('Erro na API:', err))
  }, [])

  //filtrar personagens com base no termo de busca

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='App'>
      {/*  */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Body characters={filteredCharacters} />

    </div>
  )
}

export default App
