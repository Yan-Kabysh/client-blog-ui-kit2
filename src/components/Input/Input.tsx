import React, { useState } from "react";
import { z } from "zod";
import { InputProps } from "./interfaces";
import "./Input.scss";

// Определяем схему валидации
const validationSchema = z.object({
  value: z.union([
    z.string().min(1, "Поле не должно быть пустым"), 
    z.string().email("Введите корректный email"), 
  ]),
  type: z.enum(["text", "email"]), 
});

const Input = ({ placeholder, type }: InputProps) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    try {
      validationSchema.parse({ value: inputValue, type });
      setError(null); 
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message); 
      }
    }
  };

  return (
    <div className="input-wrapper">
      <input
        className={`input ${error ? "input--error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Input;
