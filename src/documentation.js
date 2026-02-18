import { Link } from 'react-router-dom';

export default function Documentacion() {
  return (
    <div className="documentation-container">
      <div className="card">
        <h2>Centro de Descargas</h2>
        <p>Haz clic en los botones para obtener tus archivos PDF.</p>
        
        <div className="button-group">
          {/* Use 'download' attribute to force the browser to download instead of open */}
          <a href="/comandos.pdf" download="Comandos_React.pdf" className="btn blue">
            COMANDOS BÁSICOS DE REACT
          </a>

          <a href="/estandar_ieee.pdf" download="Estandar_IEEE.pdf" className="btn green">
            ISO / ESTANDAR IEEE
          </a>

          <a href="/requerimientos.pdf" download="Requerimientos.pdf" className="btn black">
            REQUERIMIENTOS FUNCIONALES
          </a>

          <a href="/python_code.pdf" download="Algoritmo_SHA256.pdf" className="btn black">
            CÓDIGO PYTHON ALGORITMO SHA-256
          </a>

          {/* This one uses Link to go back to the home page */}
          <Link to="/" className="btn-outline">
            REGRESAR AL PROYECTO PRINCIPAL
          </Link>
        </div>
      </div>
    </div>
  );
}