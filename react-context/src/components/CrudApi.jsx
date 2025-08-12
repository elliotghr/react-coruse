import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";
import { CrudProvider } from "../context/CrudContext";

export default function CrudApi() {
  return (
    <>
      <h2>CRUD API con Context API</h2>
      <CrudProvider>
        <article className="grid-1-2">
          <CrudForm />
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            />
          )}
          {db && (
            <CrudTable
              data={db}
              deleteData={deleteData}
              setDataToEdit={setDataToEdit}
            />
          )}
        </article>
      </CrudProvider>
    </>
  );
}
