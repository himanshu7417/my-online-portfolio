import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testinomials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
const App = () => {
  return (
    <>
     <Header/>
     <Navbar/>
     <About/>
     <Experience/>
     <Services/>
     <Portfolio/>
     <Testinomials/>
     <Contact/>
     <Footer/>
    
    </>
  )
}

export default App
