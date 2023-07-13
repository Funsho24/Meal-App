import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Single from './pages/Singlemeal'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
 

  return (
    <div className='container-md'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/meal/:mealId' element ={<Single />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
