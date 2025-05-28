import { useState } from 'react'
import './Body.css'


function Body() {
  return (
    <div className='Body'>  
      <div className='card'>
        <div className='noImage'>Imagem indisponivel</div>
        <h2>Personagem</h2>
        <p>
          <strong>Casa:</strong> Desconhecida
        </p>
      </div>
    </div>
  )
}

export default Body