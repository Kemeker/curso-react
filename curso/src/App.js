import React, {useEffect, useState} from "react"


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
  <div>
    <h1>teste</h1>
  </div>
  )
}

export default App 