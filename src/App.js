
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Price from './components/Price';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Shareinfo from './components/Shareinfo';
import Privacy from './components/Privacy';
import Cookie from './components/Cookie';

import {BrowserRouter, Routes , Route } from "react-router-dom";
function App()  {
  return (
    <BrowserRouter>
    <NavBar/>
    
    
    
<Routes>
  <Route path="/Header" element={<Header/>} />
  <Route path="/skills" element={<Price/>} />
  <Route path="/Portfolio" element={<Portfolio/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/Services" element={<Services/>} />
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Shareinfo' element={<Shareinfo/>}/>
  <Route path='/Privacy' element={<Privacy/>} />
  <Route path='/Cookie' element={<Cookie/>} />
</Routes>

<Footer/>

 
    </BrowserRouter>
  );
}

export default App;
