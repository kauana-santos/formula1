import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav";
import Corridas from "./pages/Corridas";
import Forum from "./pages/Forum";

export default function Router() {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/corridas" element={<Corridas/>}/>
            <Route path="/forum" element={<Forum/>}/>
        </Routes>
    </BrowserRouter>
  )
}
