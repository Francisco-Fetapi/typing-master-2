import React, { useState } from "react";

interface FieldProps {
  value?: string | number;
  error?: boolean;
  helperText?: string;
}

type handleChangeFunc = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | undefined>
) => void;
type handleFocusFunc = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
) => void;

export default function useField<T>(): [
  FieldProps,
  handleChangeFunc,
  handleFocusFunc,
  () => void
] {
  const [field, setField] = useState<FieldProps>({
    error: false,
    helperText: "",
  });
  const handleChange: handleChangeFunc = (e) => {
    const value = e?.target.value;
    if (!value || value === "0") {
      setField({
        value,
        error: true,
        helperText: "Campo inválido",
      });
      return;
    }
    setField({ value, error: false, helperText: "" });
  };

  const handleBlur: handleFocusFunc = () => {
    setField((prev) => ({ ...prev, error: false, helperText: "" }));
  };
  function clear() {
    setField((prev) => ({ ...prev, value: "" }));
  }

  return [field, handleChange, handleBlur, clear];
}
