import './App.css';
import Navbar from './components/NavBar/Navbar.js'
import Projects from './components/Projects/Projects.js'
import linkedinLogo from './linkedin-3-512.png'
import githubLogo from './icons8-github-480.png'
import abstractShapes from './abstract-shapes.png'
import Footer from './components/Footer/Footer.js'
import Typewriter from './components/Typewriter.js'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='Intro'>
        <Typewriter />
        <h2> Dartmouth '24 <span class="blueText">product designer</span> and <span class="pinkText">software engineer</span> passionate about creating inclusive & accessible technologies </h2>
        <a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer">
          <img id="linkedinLogo" src={linkedinLogo} alt="Linkedin Logo" width='22' height='22'/></a>
        <h3><a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h3>
        {/* <a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer"><img id="githubLogo" src={githubLogo} alt="Github Logo" width='30' height='30'/></a>
        <h3><a href="https://www.linkedin.com/in/justin-r-chong/" target="_blank" rel="noopener noreferrer">Github</a></h3> */}
      </div>
      <img id="abstractShapes" src={abstractShapes} alt="Abstract Shapes" width="1700" height="950" />
      <Projects />
      <Footer />
    </div>
    
  );
}

export default App;
