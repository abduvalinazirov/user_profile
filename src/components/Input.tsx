import React, { ChangeEvent } from "react";

interface InputComponentProps {
  value: string;
  name: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  className: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ value, name, type, placeholder, onChange, error, className }) => {
  return (
    <div className={className}>
      <input type={type || "text"} className={`${error && "input__error"}`} placeholder={placeholder} value={value} name={name} onChange={onChange} />
      {error && <p className="error__text">{error}</p>}
    </div>
  );
};

export default InputComponent;
