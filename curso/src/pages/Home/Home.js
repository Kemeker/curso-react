import {Link} from "react-router-dom"
import Nutrientes from '../../components/Nutrientes'


function Home(){
    return(
        <div>
            <h1>Pagina home</h1>
            <Link to={'/sobre'}>Sobre</Link>
            <br></br>
            <Link to={'/contato'}>Contato</Link>
           
        </div>
    )

}

export default Home