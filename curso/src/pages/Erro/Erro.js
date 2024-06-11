import {Link} from 'react-router-dom'


function Erro(){
    return(
        <div>
            <h2>Error pagina not found </h2>
            <Link to={'/'}>Voltar ao inicio</Link>
        </div>

    )
}

export default Erro