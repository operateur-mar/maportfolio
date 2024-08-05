import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/About"
import TODO from "./components/todo"
import SKILLS from "./components/skills"
import Projects from "./components/projects"
import Footer from "./components/footer"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArticlePage from "./components/article";



function App() {
  return (
    <Router>

    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <TODO/>
      <SKILLS/>
      <Projects/>
      <Footer/>
    </div>

    <Routes>
      <Route path="/ar" element={<ArticlePage />} />
      </Routes>
    </Router>
   
    

  );
}

export default App;
