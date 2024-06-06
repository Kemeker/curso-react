import {useState, useEffect} from 'react'

function Tarefa() {
  const [input, setInput] = useState('')
  const [tarefa,  setTarefa] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]) 

  useEffect(()=>{
    const tarefaStorage = localStorage.getItem('@tarefa')

    if(tarefaStorage){
        setTarefa(JSON.parse(tarefaStorage))
    }

  }, [])

  useEffect(()=>{
    
    localStorage.setItem('@tarefa', JSON.stringify(tarefa))
    

  }, [tarefa])
  
  function handlerRegister(e){
    e.preventDefault()
    setTarefa([...tarefa, input])
    setInput('')
  }


  return (
   <div>
        <form onSubmit={handlerRegister}>
            <label>Nome da tarefa </label><br />
                <input  
                    placeholder='Digite uma terefa'
                    value={input}
                    onChange={(event)=> setInput(event.target.value)}
                /><br />
                <button type='submit'>Registrar</button>
        </form>
        <br />
        <ul>
            {tarefa.map(tarefa => (
                <li key={tarefa}>{tarefa}</li>
            ))}



        </ul>
    </div>
  )
}

export default Tarefa