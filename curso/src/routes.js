import {BrowserRouter, Routes, Route } from "react-router-dom"

// import das paginas
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'

// import de componentes
import Header from "./components/Header"


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/contato" element={<Contato/>} />

            </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp