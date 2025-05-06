import React from "react";
import { useForm } from "../hooks/useForm";
import { Loader } from "./Loader";
import { Message } from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const validationsForm = (form) => {
  let errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo nombre solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo email no es valido";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo asunto es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo comentarios es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo comentarios no debe exceder los 255 caracteres";
  }

  return errors;
};

export const ContactForm = () => {
  const {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const styles = {
    color: "red",
    fontSize: "14px",
    fontWeight: "bold",
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {error.name && <p style={styles}>{error.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {error.email && <p style={styles}>{error.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {error.subject && <p style={styles}>{error.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        ></textarea>
        {error.comments && <p style={styles}>{error.comments}</p>}
        <input type="submit" value="Enviar" />
        {loading && <Loader />}
        {response && <Message msg="Formulario enviado correctamente" bgColor="#198754" />}
      </form>
    </div>
  );
};
