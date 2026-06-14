import Navbar from './components/Navbar'
import VersiculoDoDia from './components/VersiculoDoDia'
import Oracao from './components/Oracao'
import Tela01Chegada from './sections/Tela01Chegada'
import Tela02Manifesto from './sections/Tela02Manifesto'
import Tela03Mensageiro from './sections/Tela03Mensageiro'
import Tela04Proposito from './sections/Tela04Proposito'
import Tela05EnquantoHaTempo from './sections/Tela05EnquantoHaTempo'
import Tela06Album from './sections/Tela06Album'
import Tela07Palavra from './sections/Tela07Palavra'
import Tela08Universo from './sections/Tela08Universo'
import Tela09Caminhe from './sections/Tela09Caminhe'
import Tela10Rodape from './sections/Tela10Rodape'

function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <VersiculoDoDia />
      <Oracao />
      <main>
        <Tela01Chegada />
        <Tela02Manifesto />
        <Tela03Mensageiro />
        <Tela04Proposito />
        <Tela05EnquantoHaTempo />
        <Tela06Album />
        <Tela07Palavra />
        <Tela08Universo />
        <Tela09Caminhe />
      </main>
      <Tela10Rodape />
    </div>
  )
}

export default App
