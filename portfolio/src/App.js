import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Navigation from './pages/Navigation'


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
  
}

export default App;
