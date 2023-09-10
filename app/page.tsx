import InputBox from "@/components/inputs/InputBox";
import InputBoxPlaceholder from "@/components/placeholders/InputBoxPlaceholder";
import Posts from "@/components/posts/posts";
import React from "react";

const Home = () => {
  const loggedIn = false;

  const posts = [
    {
      id: 0,
      username: "testUser",
      date: "9/9/2023",
      title: "Post 1",
      post: "This is an example for post 1.",
    },
    {
      id: 1,
      username: "testUser",
      date: "9/9/2023",
      title: "Post 2",
      post: "This is an example for post 2.",
    },
    {
      id: 2,
      username: "testUser",
      date: "9/9/2023",
      title: "Post 3",
      post: "This is an example for post 3.",
    },
  ];

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
          <Posts posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Home;
