import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth/Auth'
import SignIn from './pages/Auth/Signin'
import Home from './pages/Home'
import SignUp from './pages/Auth/Signup'
import Layout from './pages/Layout'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Carts from './pages/Carts'
import Orders from './pages/Orders'

function App() {

  return (
    <>
       <BrowserRouter>
    <Routes>
      <Route path='/auth'>
        <Route index element ={<Auth/>} />
        <Route path='signup' element ={<SignUp/>} />
        <Route path='signin' element ={<SignIn/>} />
      </Route>

      <Route path='/' element ={<Layout/>}>
        <Route index element ={<Home/>} />
        <Route path='/products' element ={<Products/>} />
        <Route path='/products/:id' element ={<ProductDetail/>} />
        <Route path='/carts' element ={<Carts/>} />
        <Route path='/orders' element ={<Orders/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
