import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import Header from './Header'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import NotFound from './NotFound'
import Counter from './Counter'
import Signup from './SignUp'
import Login from './Login'
import Fetch from './Fetch'
import ProtectedRoute from './ProtectedRoute'
import Product from './Product'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.log("Error:", err)
        setLoading(false)
      })
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about_react' element={<About />} />

        <Route path='/contact_us' element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        } />

        <Route path='/counter' element={<Counter />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/fetchdata' element={<Fetch />} />

        <Route path='/product' element={<Product products={products} loading={loading} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
