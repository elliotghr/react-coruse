# REACT

## 📌 49. Prop children en React

En React, la prop especial children permite que un componente contenga y renderice elementos hijos que se le pasen desde el componente padre.

### ✅ ¿Qué es?

Es una propiedad implícita (no es necesario declararla explícitamente al usar el componente).

Representa el contenido que va entre las etiquetas de apertura y cierre de un componente.

### 🧱 Ejemplo básico:

```jsx
function MiContenedor(props) {
  return <div className="contenedor">{props.children}</div>;
}

// Uso
<MiContenedor>
  <p>Hola mundo</p>
</MiContenedor>;
```

En este caso, <p>Hola mundo</p> es el children que se renderiza dentro de MiContenedor.

### 🎯 ¿Para qué sirve?

Para crear componentes reutilizables y envolventes (como tarjetas, layouts, modales, etc.).

Permite composición flexible de interfaces.
