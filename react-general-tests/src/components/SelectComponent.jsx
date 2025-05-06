import React, { useEffect, useState } from "react";

export const SelectComponent = ({ name, url, handleChange }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(url);
        const res = await response.json();
        setData(res.response[name]);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, [url]);

  if (!data) return null;

  let label =
    name[0].toUpperCase() +
    (name.endsWith("s") ? name.slice(1, -1) : name.slice(1));

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <br />
      <select name={name} id={name} onChange={handleChange}>
        <option value="">- - -</option>
        {data &&
          data.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      <br />
    </>
  );
};
