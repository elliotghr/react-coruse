import React, { useState } from "react";
import { SelectComponent } from "./SelectComponent";

export const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [colony, setColony] = useState("");

  let TOKEN = "pruebas";
  return (
    <div>
      <form>
        <SelectComponent
          name="estado"
          handleChange={(e) => setState(e.target.value)}
          value={state}
          url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        ></SelectComponent>
        {state && (
          <SelectComponent
            name="municipios"
            handleChange={(e) => setMunicipality(e.target.value)}
            value={municipality}
            url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          ></SelectComponent>
        )}
        {(municipality && state) && (
          <SelectComponent
            name="colonia"
            handleChange={(e) => setColony(e.target.value)}
            value={colony}
            url={`https://api.copomex.com/query/get_colonia_por_municipio/${municipality}?token=${TOKEN}`}
          ></SelectComponent>
        )}
      </form>
      <h3>Selected Values</h3>
      <p>Estado: {state}</p>
      <p>Municipio: {municipality}</p>
      <p>Colonia: {colony}</p>
    </div>
  );
};
