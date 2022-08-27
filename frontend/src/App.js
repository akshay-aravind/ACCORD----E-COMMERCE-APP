import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
          <Route  path='/payment' element={<PaymentScreen/>} />   
          <Route  path='/placeorder' element={<PlaceOrderScreen/>} />                 
          <Route  path='/shipping' element={<ShippingScreen />} />
            <Route exact path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} exact />
            <Route path='/cart' element={<CartScreen />}>
              <Route path=':id' element={<CartScreen />} />
              <Route path='cart' element={<CartScreen />} />
            </Route>
            <Route exact path='/' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
