import React from "react";
import Form from "./components/Form";
import Render from "./components/Render";
import{Routes,Route,BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/render" element={<Render/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
