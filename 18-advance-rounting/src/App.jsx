import React from 'react'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Contactdetial from './pages/Contactdetial'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
        <Route path='page1' element={<Page1 />} />
        <Route path='page2' element={<Page2 />} />

        </Route>
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Contact/:id' element={<Contactdetial />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  
      <Fotter />
    </div>
  )
}

export default App