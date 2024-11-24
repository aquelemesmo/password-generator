import { useState } from 'react'
import './App.css'
import generateRandomString from './functions/generateRandomString'

export default function App() {
  const [passwordLength, setPasswordLength] = useState(10) // padrão
  const [password, setPassword] = useState('')
  
  const handleRangeChance = (e) => {
    setPasswordLength(Number(e.target.value))
  }

  const handleGeneratePassword = () => {
    const novaSenha = generateRandomString(passwordLength)
    setPassword(novaSenha)
  }

  return (
    <>
      <div>
        <h1>Gerador de senha</h1>
        <input type='number' value={passwordLength} onChange={handleRangeChance} />
        <button onClick={handleGeneratePassword}>Gerar senha</button>
        <p>Sua senha gerada: <strong>{password || 'Clique no botão para gerar a senha'}</strong></p>
      </div>
    </>
  )
}
