import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      
      <Header />
      <main className='py-3'>
      
        <Container>
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductScreen />} exact/>
          </Routes>
        </Container>
       
      </main>
      <Footer />
     
    </Router>
  )
}

export default App
