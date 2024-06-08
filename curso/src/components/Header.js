import {Link} from 'react-router-dom'
import '../css/header.css'

 

function Header(){
    return(
        
        <header>
            <h2>Sujeito Dev</h2>
            <div className='menu'> 
                <Link to={'/'}>Home</Link>
                <Link to={'/sobre'}>Sobre</Link>
                <Link to={'/contato'}>Contatos</Link>
            </div>
        </header>
        
    )
}
export default Header