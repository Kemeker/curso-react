import {Link, useParams} from "react-router-dom"
import Nutrientes from '../../components/Nutrientes'


function Home(){
    return(
        <div>
            <h1>Pagina home</h1>
            <Link to={'/sobre'}>Sobre</Link>
            <br></br>
            <Link to={'/contato'}>Contato</Link>
            <hr/>

            <Link to={'/produto/1'}>Acessar produtos </Link>
        </div>
    )

}

export default Home