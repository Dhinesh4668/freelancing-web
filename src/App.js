import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import { HomeComponent, Homebanner, Swiper,AboutUs,OurPatners} from './app/index'
const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<HomeComponent />}/>
        <Route path='/banner' element={<Homebanner />}/>
        {/* <Route path='/content' element={<Content />}/> */}
        <Route path='/swiper' element={<Swiper />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/partners' element={<OurPatners />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
