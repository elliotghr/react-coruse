import React from "react";
import Frameworks from "./components/Frameworks";
import Bootstrap from "./components/Bootstrap";
import MaterialUI from "./components/MaterialUI";
import AnchorTemporaryDrawer from "./components/MaterialDrawer";

function App() {
  return (
    <div>
      <h1>Frameworks con CSS</h1>
      <Frameworks />
      <Bootstrap />
      <MaterialUI />
      <AnchorTemporaryDrawer />
    </div>
  );
}

export default App;
