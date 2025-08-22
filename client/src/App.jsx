import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/houses/:id" element={<House id={req.params.id} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

