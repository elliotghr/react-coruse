import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setError(validateForm(form));

    if (Object.keys(error).length === 0) {
      // Establecemos loading en true
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/elliotperez879@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setTimeout(() => {
            setResponse(false);
            setForm(initialForm);
          }, 3000);
        });
    } else {
      setResponse("Please fill in the form correctly");
    }
  };

  return {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
