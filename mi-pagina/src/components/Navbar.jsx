import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
