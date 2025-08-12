import { useContext } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";
import CrudContext from "../context/CrudContext";

export default function CrudApi() {
  const { db, error, loading } = useContext(CrudContext);
  return (
    <>
      <h2>CRUD API con Context API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </>
  );
}
