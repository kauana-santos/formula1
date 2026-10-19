import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav";
import Corridas from "./pages/Corridas";
import Forum from "./pages/Forum";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Router() {
  return (
    <BrowserRouter>
        <Header nav={<Nav/>}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/corridas" element={<Corridas/>}/>
            <Route path="/forum" element={<Forum/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
