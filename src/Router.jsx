import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav";
import Corridas from "./pages/Corridas";

export default function Router() {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/corridas" element={<Corridas/>}/>
        </Routes>
    </BrowserRouter>
  )
}
