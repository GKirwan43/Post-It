"use client";

import PostButton from "./PostButton";

import { useState, useEffect } from "react";

const InputBox = () => {
  const [formValid, setFormValid] = useState(false);

  return (
    <div className="card">
      <form>
        <input
          type="text"
          placeholder="Type your post title here."
          maxLength={60}
          className="title-input"
          required
        />
        <textarea
          rows={4}
          cols={80}
          placeholder="Type your post here."
          maxLength={320}
          className="post-input resize-none"
          required
        />
        <div className="flex sm:justify-end justify-center mtop-2">
          <PostButton formValid={formValid} />
        </div>
      </form>
    </div>
  );
};

export default InputBox;
