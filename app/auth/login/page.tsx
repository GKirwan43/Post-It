"use client";

import LoadButton from "@/components/inputs/LoadButton";
import TextInput from "@/components/inputs/TextInput";
import { login } from "@/utils/requests/auth";
import { useRouter } from "next/navigation";

import { useState } from "react";

interface ErrorType {
  field: string,
  message: string,
}

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { push } = useRouter();

  const getErrors = (field: string) => {
    return errors.filter(item => item.field === field);
  };

  const loginButtonPressed = async () => {
    setLoading(true);
    setErrors([]);

    const res = await login(username, password);

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
          <h1 className="title">Welcome back to Post It!</h1>
          <h2 className="subtitle">
            Fill out the form below to login!
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
            onKeyDown={(e) => e.key === "Enter" && loginButtonPressed()}
            value={username}
          />
          <TextInput
            type="password"
            text="Passoword"
            placeholder="Your password"
            errors={getErrors("password")}
            onChange={(e) => {setPassword(e.target.value)}}
            onKeyDown={(e) => e.key === "Enter" && loginButtonPressed()}
            value={password}
          />
          <div className="text-center mt-5">
            <LoadButton text="Create Account" loading={loading} onClick={loginButtonPressed} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
