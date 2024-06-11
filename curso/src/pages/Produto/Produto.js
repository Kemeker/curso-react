import {useParams} from 'react-router-dom'

function Produto(){
    const { id} = useParams()



    return(
        <div>
            <span>
                <h2>Voce procura pelo produto {id}</h2>
                <p>Ele consta em nosso estoque aproveite</p>
            </span>
        </div>

    )
}

export default Produto