import './App.css'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
function App() {
  return (
    <div className='min-h-screen flex flex-col gap-10 relative'>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  )
}

export default App

