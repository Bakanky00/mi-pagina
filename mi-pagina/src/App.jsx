import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Presentacion from "./pages/Presentacion";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Presentacion />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
