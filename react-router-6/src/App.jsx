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
  { id: 6, nombre: "Producto 6", precio: 600 },
  { id: 7, nombre: "Producto 7", precio: 700 },
  { id: 8, nombre: "Producto 8", precio: 800 },
  { id: 9, nombre: "Producto 9", precio: 900 },
  { id: 10, nombre: "Producto 10", precio: 1000 },
  { id: 11, nombre: "Producto 11", precio: 1100 },
  { id: 12, nombre: "Producto 12", precio: 1200 },
  { id: 13, nombre: "Producto 13", precio: 1300 },
  { id: 14, nombre: "Producto 14", precio: 1400 },
  { id: 15, nombre: "Producto 15", precio: 1500 },
  { id: 16, nombre: "Producto 16", precio: 1600 },
  { id: 17, nombre: "Producto 17", precio: 1700 },
  { id: 18, nombre: "Producto 18", precio: 1800 },
  { id: 19, nombre: "Producto 19", precio: 1900 },
  { id: 20, nombre: "Producto 20", precio: 2000 },
  { id: 21, nombre: "Producto 21", precio: 2100 },
  { id: 22, nombre: "Producto 22", precio: 2200 },
  { id: 23, nombre: "Producto 23", precio: 2300 },
  { id: 24, nombre: "Producto 24", precio: 2400 },
  { id: 25, nombre: "Producto 25", precio: 2500 },
  { id: 26, nombre: "Producto 26", precio: 2600 },
  { id: 27, nombre: "Producto 27", precio: 2700 },
  { id: 28, nombre: "Producto 28", precio: 2800 },
  { id: 29, nombre: "Producto 29", precio: 2900 },
  { id: 30, nombre: "Producto 30", precio: 3000 },
  { id: 31, nombre: "Producto 31", precio: 3100 },
  { id: 32, nombre: "Producto 32", precio: 3200 },
  { id: 33, nombre: "Producto 33", precio: 3300 },
  { id: 34, nombre: "Producto 34", precio: 3400 },
  { id: 35, nombre: "Producto 35", precio: 3500 },
  { id: 36, nombre: "Producto 36", precio: 3600 },
  

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
