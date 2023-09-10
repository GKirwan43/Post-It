"use client";

import LoadButton from "@/components/inputs/LoadButton";
import TextInput from "@/components/inputs/TextInput";

const Register = () => {
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
          <TextInput type="text" text="Username" placeholder="Your username" />
          <TextInput type="text" text="Email" placeholder="Your email" />
          <TextInput
            type="password"
            text="Passoword"
            placeholder="Your password"
          />
          <TextInput
            type="password"
            text="Confirm Passoword"
            placeholder="Confirm password"
          />
          <div className="text-center mt-5">
            <LoadButton text="Create Account" isFormValid={() => true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
