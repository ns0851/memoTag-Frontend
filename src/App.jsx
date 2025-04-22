import { useState } from 'react'
import Hero from './pages/Hero'
import ProblemSection from './pages/ProblemSection'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Solution from './pages/Solution'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="">
    <Navbar />
    <Hero />
    <Marquee />
    <ProblemSection />
    <Solution />
    <Register />
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  )
}

export default App
