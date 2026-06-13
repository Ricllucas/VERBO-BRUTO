import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Album from './components/Album'
import Mensageiro from './components/Mensageiro'
import Redes from './components/Redes'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Album />
        <Mensageiro />
        <Redes />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
