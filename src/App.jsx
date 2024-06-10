import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experiance from './components/Experiance'
import Contact  from './components/Contact'
import { Toaster } from "react-hot-toast";
import Portfolio from './components/Portfolio'
import Footer from './components/Foote'
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio/>
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}


export default App