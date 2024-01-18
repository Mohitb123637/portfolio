import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { HeaderPhone } from "./components/Header";
import { Toaster } from "react-hot-toast";

import './styles/app.scss'
import Skill from "./components/Skill";
import { useState } from "react";
function App() {

const [menuOpen, setMenuOpen] = useState(false)

  return (
<>
<HeaderPhone menuOpen = {menuOpen} setMenuOpen ={setMenuOpen}/>
<Header menuOpen = {menuOpen} setMenuOpen ={setMenuOpen}/>
<Home/>
<Work/>
<Timeline/>
<Skill/>
<Contact/>
<Footer/>
<Toaster/>
</>
  );
}

export default App;
