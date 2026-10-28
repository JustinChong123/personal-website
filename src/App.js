import './App.css';
import Navbar from './components/NavBar/Navbar.js'
import Projects from './components/Projects/Projects.js'
import githubLogo from './icons8-github-480.png'
import FloatingShapes from './components/FloatingShapes/FloatingShapes.js'
import Footer from './components/Footer/Footer.js'
import Typewriter from './components/Typewriter.js'
import ExtrudedText from './components/ExtrudedText/ExtrudedText.js'
import TypeReveal, { typingDuration } from './components/TypeReveal/TypeReveal.js'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='Intro'>
        <Typewriter />
        <ExtrudedText text="Justin Chong" />
        <h2 className="introStatement">Passionate about leveraging <TypeReveal text="data-driven experimentation" delay={0.6} className="introHighlight" /> to design experiences that delight users and <TypeReveal text="lift business metrics" delay={0.6 + typingDuration('data-driven experimentation') + 0.3} className="introHighlight" /></h2>
        {/* <a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer"><img id="githubLogo" src={githubLogo} alt="Github Logo" width='30' height='30'/></a>
        <h3><a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer">Github</a></h3> */}
      </div>
      <FloatingShapes />
      <Projects />
      <Footer />
    </div>
    
  );
}

export default App;
