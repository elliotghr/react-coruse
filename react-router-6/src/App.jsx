import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Acerca } from "./pages/Acerca";
import { Home } from "./pages/Home";
import { Contacto } from "./pages/Contacto";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";
import { Productos } from "./pages/Productos";
import { ProductoDetalle } from "./pages/ProductoDetalle";
import { useState } from "react";
import { Servicios } from "./pages/Servicios";

const initialProducts = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
  { id: 3, nombre: "Producto 3", precio: 300 },
  { id: 4, nombre: "Producto 4", precio: 400 },
  { id: 5, nombre: "Producto 5", precio: 500 },
];

function App() {
  const [productos, setProductos] = useState(initialProducts);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          {/* Redirección */}
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          ></Route>
          {/* El nombre que asignemos después de los : es el nombre que recibirá la Page como parametro */}
          <Route
            path="/productos/:id"
            element={<ProductoDetalle productos={productos} />}
          ></Route>
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<h2>Este es el home de servicios</h2>} />
            <Route path="/servicios/garantia" element={<h2>Garantia de nuestros servicios</h2>} />
            <Route path="/servicios/lista" element={<h2>Lista de nuestros servicios</h2>} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
