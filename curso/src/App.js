import React, {useEffect, useState} from "react"
import '../src/css/style.css'

// https://sujeitoprogramador.com/rn-api/?api=posts


function App() {
  const [nutri, setNutri] = useState([])

  useEffect(()=>{

    function loadAPI(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      
      fetch(url)
      .then((resultado)=>resultado.json())
      .then((ResultadoDaAPI)=>{
        setNutri(ResultadoDaAPI)
        

      })

    }

    loadAPI()

  },[])

  console.log(nutri)

  
  return (
  <div className="container">
    <header>
      <strong>React Nutri</strong>
    </header>
    {nutri.map((item)=>{
      return(
        <article key={item.id} className="post">
          <strong className="titulo">{item.titulo}</strong>
          
          <img src={item.capa} alt={item.titulo} className="capa"/> 
          <p className="subtitulo">
            {item.subtitulo}
          </p>

          <a className="botao">Acessar</a>
        </article>
        
      )
    })}
  </div>
  )
}

export default App 