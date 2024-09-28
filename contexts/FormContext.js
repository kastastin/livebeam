"use client";

import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formType, setFormType] = useState("signup");

  return (
    <FormContext.Provider value={{ formType, setFormType }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
