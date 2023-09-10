"use client";

import LoadButton from "./LoadButton";

import { useState, useEffect } from "react";

const InputBox = () => {
  const [showIssues, setShowIssues] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const formValid = () => {
    if (title && post) {
      return true;
    }

    return false;
  };

  const postButtonPressed = () => {
    const isFormValid = formValid();

    setShowIssues(true);

    if (isFormValid) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    return isFormValid;
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
        disabled={loading}
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
        disabled={loading}
        required
      />
      <label
        className="text-red-500"
        hidden={!showIssues || (showIssues && post != "")}
      >
        Text is required for a post.
      </label>
      <div className="flex sm:justify-end justify-center mtop-2">
        <LoadButton text="Post" isFormValid={postButtonPressed} />
      </div>
    </div>
  );
};

export default InputBox;
