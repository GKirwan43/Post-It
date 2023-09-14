"use client";

import InputBox from "@/components/inputs/InputBox";
import CenterSpinner from "@/components/loading/CenterSpinner";
import InputBoxPlaceholder from "@/components/placeholders/InputBoxPlaceholder";
import Posts from "@/components/posts/posts";
import React from "react";

import { useState, useEffect } from "react";
import { getPosts } from "@/utils/posts";
import { auth } from "@/utils/auth";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const loadPosts = async () => {
    setLoading(true);

    const res = await getPosts();

    if (!res.error) {
      setPosts(res.posts);
    } else {
      setError(error);
    }

    setLoading(false);
  };

  const content = () => {
    if (!loading) {
      if (error != "") {
        return <p className="text-lg text-red-500 text-center my-5">{error}</p>;
      }

      if (posts.length > 0) {
        return <Posts posts={posts} />;
      } else {
        return (
          <div className="card my-2">
            <p className="text-3xl text-center my-40">There are no posts.</p>
          </div>
        );
      }
    }

    return <CenterSpinner />;
  };

  useEffect(() => {
    loadPosts();

    auth().then((data) => {
      setLoggedIn(!data.error);
    });
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h1 className="title">Welcome to Post It!</h1>
          <h2 className="subtitle">My first NextJS project</h2>
          <h3 className="subtitle-2">Made by Gavin Kirwan</h3>
        </div>
        <div className="mx-5 sm:mx-10 xl:mx-72">
          {loggedIn ? (
            <InputBox onSubmit={loadPosts} />
          ) : (
            <InputBoxPlaceholder />
          )}
          {content()}
        </div>
      </div>
    </>
  );
};

export default Home;
