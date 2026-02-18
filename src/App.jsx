import { Routes, Route, Link } from 'react-router-dom';
import Documentacion from './Documentacion';
import Foto from './Foto.jpeg';

function Home() {
  return (
    <header className="App-header">
      <img src={Foto} className="App-logo" alt="logo" />
      <h1>Evaluación parcial 1</h1>
      <p>Alumno: Flores Verdin Leonardo Javier</p>
      
      <div className="links-container">
        <a href="www.linkedin.com/in/leo-verd-6170aa378" className="App-link">LINKED IN DE MI PROFILE</a>
        
        <Link to="/documentacion" className="App-link">
          DOCUMENTACION PARCIAL 1
        </Link>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentacion" element={<Documentacion />} />
      </Routes>
    </div>
  );
}

export default App;