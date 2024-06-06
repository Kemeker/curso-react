import {useState} from 'react'

function Contador(){
  const  [contador, setContador] = useState('0')
  
 
  
  
  
  return(
    <div>
    <button onClick={() => setContador(contador + 1)}>Contador {contador} </button>
    
    </div>
    
  
  
  
  )
}

export default Contador