
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import ThemeContext from "./context/themeContext"


// import { useEffect, useState } from 'react';


function App() {
  
  return (
   
    <div className="main">
      <Header/>
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;
