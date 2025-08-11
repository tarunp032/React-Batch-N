import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import DropDown from './DropDown';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/dropdown' element={<DropDown/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
