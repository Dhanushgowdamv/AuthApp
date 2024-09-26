import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignIn } from './pages/SignIn'
import { Signup } from './pages/Signup'
import { Profil } from './pages/Profil'
import Header from './components/Header'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Signin' element={<SignIn/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/profile' element={<Profil/>} />
        

        


      </Routes>
    </BrowserRouter>
  );
}
