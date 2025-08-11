import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Header from './Header'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import { BrowserRouter,Routes, Route} from 'react-router-dom' 
import NotFound from './NotFound'
import Counter from './Counter'
import Signup from './SignUp'
import Login from './Login'
import Fetch from './Fetch'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about_react' element={<About/>}/>
        <Route path='/contact_us' element={<Contact/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/fetchdata' element={<Fetch/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
