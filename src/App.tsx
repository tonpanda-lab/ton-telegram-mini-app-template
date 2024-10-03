import React from 'react';
import './App.css';

import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Plan } from './pages/Plan';

function App() {

  return (

    <BrowserRouter>

      <div className="bg-black flex justify-center">

        <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plan" element={<Plan />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
          </Routes>

        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
