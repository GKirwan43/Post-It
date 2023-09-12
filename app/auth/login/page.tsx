"use client";

import LoadButton from "@/components/inputs/LoadButton";
import TextInput from "@/components/inputs/TextInput";

import { useState } from "react";

const EmptyInput = () => {
  return {
    text: "",
    error: "",
    showError: false,
  }
}

const Register = () => {
  const [username, setUsername] = useState(EmptyInput);
  const [password, setPassword] = useState(EmptyInput);

  const isFormValid = () => {
    const isError = true;

    setUsername({...username, error: "This is an example error", showError: true});

    return !isError;
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h1 className="title">Welcome back to Post It!</h1>
          <h2 className="subtitle">
            Fill out the form to login!
          </h2>
        </div>
        <div className="card w-fit m-auto">
          <TextInput 
            type="text" 
            text="Username" 
            placeholder="Your username" 
            error={username.error}
            showError={username.showError}
            onChange={(e) => {setUsername({...username, text: e.target.value, showError: false})}}
          />
          <TextInput
            type="password"
            text="Passoword"
            placeholder="Your password"
            error={password.error}
            showError={password.showError}
            onChange={(e) => {setPassword({...password, text: e.target.value, showError: false})}}
          />
          <div className="text-center mt-5">
            <LoadButton text="Login" isFormValid={isFormValid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
