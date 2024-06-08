import { Link } from "react-router-dom"



function Sobre(){
    return(
        <div>
            <h1>Bem vindo a pagina Sobre</h1>
            <Link to={'/'}>Voltar</Link>
            <br></br>
            <Link to={'/contato'}>Contato</Link>
            
            
        </div>
    )
}

export default Sobre