import { useForm } from "../hooks/useForm";

let initial_state = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validate = (formData) => {
  let errors = {};
  if (!formData.name) {
    errors.name = "Name is required";
  } else {
    /^[a-zA-Z\sÁÉÍÓÚáéíóú]+$/.test(formData.name)
      ? null
      : (errors.name = "Name can only contain letters and spaces");
  }
  if (!formData.email) {
    errors.email = "Email is required";
  } else {
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
      ? null
      : (errors.email = "Email is not valid");
  }
  if (!formData.subject) {
    errors.subject = "Subject is required";
  }
  if (!formData.message) {
    errors.message = "Message is required";
  } else {
    formData.message.length < 10
      ? (errors.message = "Message must be at least 10 characters long")
      : null;
  }
  return errors;
};

export const ContactForm = () => {
  const { formData, formErrors, handleChange, handleBlur, handleSubmit } =
    useForm(initial_state, validate);

  return (
    <>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.name && (
            <span style={{ color: "red" }}>{formErrors.name}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.email && (
            <span style={{ color: "red" }}>{formErrors.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.subject && (
            <span style={{ color: "red" }}>{formErrors.subject}</span>
          )}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="4"
            cols="50"
            placeholder="Type your message here..."
          ></textarea>
          {formErrors.message && (
            <span style={{ color: "red" }}>{formErrors.message}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
