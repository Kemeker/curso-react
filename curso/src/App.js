import {useState} from 'react'
import Nome from './components/Nome'
import Contador from './components/Ex'



function App() {

  const [aluno, setAluno] = useState('Sujeito Programador')
  
  function MudarNome(nome) {
    setAluno(nome)
  }

  return (
    <>
      <h1>Componente App</h1>
      <h2> Ola {aluno} </h2>
      <button onClick={() => MudarNome('Cristian Bevilaqua')}>
        Mudar Nome
      </button>]
      <button onClick={() => MudarNome('Sujeito Programador')}>
        Voltar o Nome
      </button>
      <br />
      <Contador />

     
      
    </>
  )
}

export default App 