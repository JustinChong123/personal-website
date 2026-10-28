import './App.css';
import Navbar from './components/NavBar/Navbar.js'
import Projects from './components/Projects/Projects.js'
import githubLogo from './icons8-github-480.png'
import FloatingShapes from './components/FloatingShapes/FloatingShapes.js'
import Footer from './components/Footer/Footer.js'
import Typewriter from './components/Typewriter.js'
import FlickerText from './components/FlickerText/FlickerText.js'
import ExtrudedText from './components/ExtrudedText/ExtrudedText.js'

function App() {

  return (
    <div className="App">
      <div className="homeHero">
      <Navbar />
      <div className='Intro'>
        <Typewriter />
        <h2><span class="blueText"><FlickerText text="Product designer" /></span> <FlickerText text="leveraging metrics-driven experimentation to lift user and business outcomes across B2B and B2C" /></h2>
        <h2 id='miniDescription'><FlickerText text="Designing mobile-first solutions for business analytics and operations @ Toast (ex-MongoDB). I believe great design has the power to make the digital world inclusive for everyone." /></h2>
        {/* <a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer"><img id="githubLogo" src={githubLogo} alt="Github Logo" width='30' height='30'/></a>
        <h3><a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer">Github</a></h3> */}
      </div>
      <ExtrudedText text="Justin Chong" />
      </div>
      <FloatingShapes />
      <Projects />
      <Footer />
    </div>
    
  );
}

export default App;
