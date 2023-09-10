import React from "react";

type props = {
  type: string;
  text: string;
  placeholder: string;
};

const TextInput = (props: props) => {
  const { type, text, placeholder } = props;

  return (
    <>
      <label>{text}:</label>
      <input
        type={type}
        name={text}
        placeholder={placeholder}
        className="input-text mb-3 w-80"
      />
    </>
  );
};

export default TextInput;
