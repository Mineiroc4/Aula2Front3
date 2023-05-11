import './App.css'
import Foto from './img/perfil.png'

const OlaMundo = () =>{
  return (
    <h3>Ola Mundo!!</h3>
  )
}


const usuario = {
  nome: "Rafael",
  sobrenome: "Varela",
}

const BoasVindasUsuario = () =>{
  return (
  <p>Desenvolvedor Full-Stack {usuario.nome} {usuario.sobrenome}</p>
  )
}

// componente funcional do react
function App() {
  return (
    <>
    <OlaMundo/> 
    <img src={Foto}/>
    <BoasVindasUsuario/>
    
    </>
  )
}

export default App
