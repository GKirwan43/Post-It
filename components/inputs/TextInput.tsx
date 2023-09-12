import React from "react";

type props = {
  type: string;
  text: string;
  placeholder: string;
  errors: ErrorType[];
  maxLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
};

interface ErrorType {
  id: string,
  text: string,
}

const TextInput = (props: props) => {
  const { type, text, placeholder, errors, maxLength, value, onChange, onKeyDown } = props;

  const showError = errors.length > 0;

  return (
    <>
      <label>{text}:</label>
      <input
        type={type}
        name={text}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`input-text w-80 ${showError && "border-red-500"}`}
        value={value}
      />
      {errors.map((error, index) => (
        <label className="label-error" key={index}>
          {error.text}
        </label>
      ))}
      <div className="h-.5"/>
    </>
  );
};

export default TextInput;
