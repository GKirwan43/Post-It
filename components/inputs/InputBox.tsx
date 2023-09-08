"use client";

import PostButton from "./PostButton";

import { useState, useEffect } from "react";

const InputBox = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const formValid = () => {
    if (title && post) {
      return true;
    }

    return false;
  }

  const postButtonPressed = () => {
    return formValid();
  };

  return (
    <div className="card">
      <form>
        <input
          type="text"
          placeholder="Type your post title here."
          maxLength={60}
          className="title-input"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          rows={4}
          cols={80}
          placeholder="Type your post here."
          maxLength={320}
          className="post-input resize-none"
          onChange={(e) => setPost(e.target.value)}
          required
        />
        <div className="flex sm:justify-end justify-center mtop-2">
          <PostButton postButtonPressed={postButtonPressed} />
        </div>
      </form>
    </div>
  );
};

export default InputBox;
