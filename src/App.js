import React from 'react'
import './App.css';
import Navbar from './component/navbar';
import Intro from "./component/intro";
import Services from "./component/services"
import Blog from "./component/blog"
import Contact from "./component/contact"
import MainContent from "./component/mainContent";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return( <div>

<BrowserRouter>
<Navbar/>
<Routes>
  <Route  exact path="/" element={<MainContent/>}/>
  <Route path="intro" element={<Intro/>}/>
  <Route path="services" element={<Services/>}/>
  <Route path="blog" element={<Blog/>}/>
  <Route path="contact" element={<Contact/>}/>
</Routes>
</BrowserRouter>

    </div>
    )
  }

export default App;
