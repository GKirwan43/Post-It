"use client";

import LoadButton from "@/components/inputs/LoadButton";
import TextInput from "@/components/inputs/TextInput";
import { createAccount } from "@/utils/requests/auth";
import { useRouter } from "next/navigation";

import { useState } from "react";

interface ErrorType {
  field: string,
  message: string,
}

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { push } = useRouter();

  const getErrors = (field: string) => {
    return errors.filter(item => item.field === field);
  };

  const createAccountButtonPressed = async () => {
    setLoading(true);
    setErrors([]);

    const res = await createAccount(username, email, password, confirmPassword);

    if (res.ok) {
      push("/");
    } else if (res.errors) {
      setErrors(res.errors);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h1 className="title">Welcome to Post It!</h1>
          <h2 className="subtitle">
            Fill out the form below to start posting!
          </h2>
        </div>
        <div className="card w-fit m-auto">
          <TextInput 
            type="text" 
            text="Username" 
            placeholder="Your username" 
            errors={getErrors("username")}
            maxLength={16}
            onChange={(e) => {setUsername(e.target.value)}}
            onKeyDown={(e) => e.key === "Enter" && createAccountButtonPressed()}
            value={username}
          />
          <TextInput 
            type="text" 
            text="Email" 
            placeholder="Your email" 
            errors={getErrors("email")}
            onChange={(e) => {setEmail(e.target.value)}}
            onKeyDown={(e) => e.key === "Enter" && createAccountButtonPressed()}
            value={email}
          />
          <TextInput
            type="password"
            text="Passoword"
            placeholder="Your password"
            errors={getErrors("password")}
            onChange={(e) => {setPassword(e.target.value)}}
            onKeyDown={(e) => e.key === "Enter" && createAccountButtonPressed()}
            value={password}
          />
          <TextInput
            type="password"
            text="Confirm Passoword"
            placeholder="Confirm password"
            errors={getErrors("confirmPassword")}
            onChange={(e) => {setConfirmPassword(e.target.value)}}
            onKeyDown={(e) => e.key === "Enter" && createAccountButtonPressed()}
            value={confirmPassword}
          />
          <div className="text-center mt-5">
            <LoadButton text="Create Account" loading={loading} onClick={createAccountButtonPressed} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
