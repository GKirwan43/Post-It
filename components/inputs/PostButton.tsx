"use client";

import { TailSpin } from "react-loader-spinner";

import { useState, useEffect } from "react";

type PostButtonProps = {
  postButtonPressed: () => boolean;
};

const PostButton = (props: PostButtonProps) => {
  const { postButtonPressed } = props;

  const [loading, setLoading] = useState(false);

  return (
    <button
      type="submit"
      className="button-blue"
      onClick={() =>
        postButtonPressed() ? setLoading(true) : setLoading(false)
      }
    >
      {!loading ? (
        "Post"
      ) : (
        <TailSpin height="25" width="25" color="white" ariaLabel="loading" />
      )}
    </button>
  );
};

export default PostButton;
