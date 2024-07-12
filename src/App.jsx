import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Conexion } from "./Components/Conexion";
import { Contact } from "./Components/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomeContainer } from "./Components/HomeContainer";
import './App.css'
function App() {

  return (
    <>
    <div className="container">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomeContainer/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    <Conexion/>
    </div>
    </>
  )
}

export default App
