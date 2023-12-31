import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import { HomeComponent, Homebanner, Swiper,AboutUs,OurProducts} from './app/index'
const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<HomeComponent />}/>
        <Route path='/banner' element={<Homebanner />}/>
        {/* <Route path='/content' element={<Content />}/> */}
        <Route path='/work' element={<Swiper />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/producs' element={<OurProducts />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
