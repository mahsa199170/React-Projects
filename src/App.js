
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/router/Home"
import About from "./components/router/About"
import Blogs from "./components/router/Blogs"
import NotFound from "./components/router/NotFound"
import Navbar from './components/navbar/Navbar';
import BlogDetails from './components/router/BlogDetails';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/view" element={isLoggedIn ? <Navigate to = "/blogs" /> : <h4>please log in</h4>} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
