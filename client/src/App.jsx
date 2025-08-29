import {useState} from 'react'
import {BrowserRouter,Routes,Route} from "react-router"
import './App.css'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
