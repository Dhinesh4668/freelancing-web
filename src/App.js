import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import {} from './app/index'
const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<HomeComponents />}/>
        <Route path='/banner' element={<Homebanner />}/>
        <Route path='/content' element={<Content />}/>
        <Route path='/' element={<HomeComponents />}/>
        <Route path='/' element={<HomeComponents />}/>
        <Route path='/' element={<HomeComponents />}/>
        <Route path='/' element={<HomeComponents />}/>
        <Route path='/' element={<HomeComponents />}/>
        <Route path='/' element={<HomeComponents />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
