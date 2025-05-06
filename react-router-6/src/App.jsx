import "./App.css";
import { Header } from "./components/Header";
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Acerca } from "./pages/Acerca";
import { Home } from "./pages/Home";
import { Contacto } from "./pages/Contacto";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";
import { Productos } from "./pages/Productos";
import { ProductoDetalle } from "./pages/ProductoDetalle";
import { useState } from "react";
import { Servicios } from "./pages/Servicios";
import { ServiciosGarantia } from "./pages/ServiciosGarantia";
import { ServiciosLista } from "./pages/ServiciosLista";
import { ServiciosPoliticas } from "./pages/ServiciosPoliticas";
import { ServiciosHome } from "./pages/ServiciosHome";
import { ServicioDetalle } from "./pages/ServicioDetalle";

const initialProducts = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
  { id: 3, nombre: "Producto 3", precio: 300 },
  { id: 4, nombre: "Producto 4", precio: 400 },
  { id: 5, nombre: "Producto 5", precio: 500 },
];

const initialServices = [
  { id: 1, nombre: "Servicio 1", precio: 100 },
  { id: 2, nombre: "Servicio 2", precio: 200 },
  { id: 3, nombre: "Servicio 3", precio: 300 },
];

function App() {
  const [productos, setProductos] = useState(initialProducts);
  const [servicios, setServicios] = useState(initialServices);

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
            <Route index element={<ServiciosHome />} />
            <Route path="garantia" element={<ServiciosGarantia />} />
            <Route
              path="lista"
              element={<ServiciosLista servicios={servicios} />}
            />
            <Route
              path=":id"
              element={
                <>
                  <ServiciosLista servicios={servicios} />
                  <ServicioDetalle servicios={servicios} />
                </>
              }
            />
            <Route path="politicas" element={<ServiciosPoliticas />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <hr />
      <HashRouter>
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
            <Route index element={<ServiciosHome />} />
            <Route path="garantia" element={<ServiciosGarantia />} />
            <Route
              path="lista"
              element={<ServiciosLista servicios={servicios} />}
            />
            <Route
              path=":id"
              element={
                <>
                  <ServiciosLista servicios={servicios} />
                  <ServicioDetalle servicios={servicios} />
                </>
              }
            />
            <Route path="politicas" element={<ServiciosPoliticas />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
