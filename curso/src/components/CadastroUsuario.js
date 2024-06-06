import {useState} from 'react'


function CadastroUsuario() {
  const [nome,  setNome] = useState(' ')    // useState começando com string vazia ('')
  const [idade, setIdade] = useState(0)     // useState começando com numero (0)
  const [email, setEmail] = useState(' ')   // useState começando com string vazia ('')
  const [user, setUser] = useState({})      // useState começando com objeto [{}]
  const [array, setArray] = useState([])    // useState começando com Array
  

  function handlerRegister(e){
    e.preventDefault() // evento para nao deixar a pagina atualizar apos o submit do botao

    alert('Usuario registrado com suceso')
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }



  return (
    <div>
      <h1>Cadastrando Usuario</h1>
      <form onSubmit={handlerRegister}>
       
        <label>Nome: </label><br />
        <input  
          placeholder='Digite o nome'
          value={nome}
          onChange={(event)=> setNome(event.target.value)}
          type='text'
          
        />

        <label>Idade: </label><br />
        <input  
          placeholder='Digite a idade'
          value={idade}
          onChange={(event)=> setIdade(event.target.value)}
          type='number'
        
        />

        <label>Email: </label><br />
        <input  
          placeholder='Digite o email'
          value={email}
          onChange={(event)=> setEmail(event.target.value)}
          type='email'

        />


        <br />

        <button type='submit'>Registrar</button>
      </form>
      <br /> <br />

      <div>
        <span>Bem Vindo,  {user.nome}</span>
        <br />
        <span>Idade: {user.idade} </span>
        <br />
        <span>Email: {user.email}</span>
      </div>

    </div>
  )
}

export default CadastroUsuario