// imports
import React, { useState,  useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
// components
import Nav from './components/Nav'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import NASAList from './pages/NASAList.js'
import About from './pages/About'
import Giphy from './pages/Giphy'
//contexts
import UserContext from './contexts/UserContext'
// css
import './App.css'

function App() {
  // const user = useContext(UserContext)
  const [user, setUser] = useState('David')

  console.log('App', user)
  return (
    <div className="App">

    <UserContext.Provider value={{user, setUser}}>

      <Nav />

      <Routes>
        {/* we were nesting before but we don't need to so we don't need to use Outlet */}
        {/* <Route>
        </Route> */}
          <Route path='/' element={<Home />} />
          <Route path='nasalist' element={<NASAList />} />
          <Route path='about' element={<About />} />
          <Route path='giphy' element={<Giphy />} />

      </Routes>

      <Footer />

      </ UserContext.Provider>
      {/* <Outlet /> */}
      
    </div>
  );
}

export default App
