import React, { useState } from "react";

export const useForm = (initial_state, validate) => {
  const [formData, setFormData] = useState(initial_state);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlur = (e) => {
    handleChange(e);
    setFormErrors(validate(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form data
    setFormData(initial_state);
  };

  return {
    formData,
    formErrors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
