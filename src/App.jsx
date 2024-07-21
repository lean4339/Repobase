import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Conexion } from "./Components/Conexion";
import { Contact } from "./Components/Contact";
import { Services } from "./Components/Services";
import { About } from "./Components/About";
import { Vacancies } from "./Components/Vacancies";
import { Vacancie } from "./Components/Vacancie";
import { Recruitment } from "./Components/Recruitment";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomeContainer } from "./Components/HomeContainer";
import './App.css';
import './hover.css';
function App() {

  return (
    <>
    <div className="container">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomeContainer/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route ṕath="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/vacancies" element={<Vacancies/>}/>
      <Route path="/vacancies/:id" element={<Vacancie/>}/>
      <Route path="/recruitment" element={<Recruitment/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Conexion/> */}
    </div>
    </>
  )
}

export default App
