import { Route, Routes } from "react-router-dom"
import Header from "../pages/Header/Header"
import "./App.css"
import Home from "../pages/Home/Home"
import Characters from "../pages/Characters/Characters"
import CharacterById from "../pages/CharacterById/CharacterById"
import Episodes from "../pages/Episodes/Episodes"



const App = () => {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/characters" element={ <Characters /> } />
      <Route path="/character/:id" element={ <CharacterById /> } />
      <Route path="/episodes" element={ <Episodes /> } />
    </Routes>
    </div>
  )
}

export default App