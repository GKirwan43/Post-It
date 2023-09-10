import InputBox from "@/components/inputs/InputBox";
import InputBoxPlaceholder from "@/components/placeholders/InputBoxPlaceholder";
import React from "react";

const Home = () => {
  const loggedIn = true;

  return (
    <>
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h1 className="title">Welcome to Post It!</h1>
          <h2 className="subtitle">My first NextJS project</h2>
          <h3 className="subtitle-2">Made by Gavin Kirwan</h3>
        </div>
        <div className="mx-5 sm:mx-10 xl:mx-72">
          {loggedIn ? <InputBox /> : <InputBoxPlaceholder />}
        </div>
      </div>
    </>
  );
};

export default Home;
