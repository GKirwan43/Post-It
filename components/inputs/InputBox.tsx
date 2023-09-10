"use client";

import PostButton from "./PostButton";

import { useState, useEffect } from "react";

const InputBox = () => {
  const [showIssues, setShowIssues] = useState(false);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const formValid = () => {
    if (title && post) {
      return true;
    }

    return false;
  };

  const postButtonPressed = () => {
    setShowIssues(true);

    return formValid();
  };

  return (
    <div className="card">
      <input
        type="text"
        name="title"
        placeholder="Type your post title here."
        maxLength={60}
        className={`title-input p-2 ${
          showIssues && title == "" && "border-2 border-red-500 rounded-lg mb-1"
        }`}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label
        className="text-red-500"
        hidden={!showIssues || (showIssues && title != "")}
      >
        A title is required.
      </label>
      <textarea
        rows={4}
        cols={80}
        placeholder="Type your post here."
        maxLength={320}
        className={`post-input resize-none p-2 ${
          showIssues && post == "" && "border-2 border-red-500 rounded-lg my-1"
        }`}
        onChange={(e) => setPost(e.target.value)}
        required
      />
      <label
        className="text-red-500"
        hidden={!showIssues || (showIssues && post != "")}
      >
        Text is required for a post.
      </label>
      <div className="flex sm:justify-end justify-center mtop-2">
        <PostButton postButtonPressed={postButtonPressed} />
      </div>
    </div>
  );
};

export default InputBox;
