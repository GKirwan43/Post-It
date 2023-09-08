"use client";

import { useState, useEffect } from "react";

type PostButtonProps = {
  formValid: boolean;
};

const PostButton = (props: PostButtonProps) => {
  const { formValid } = props;

  const [loading, setLoading] = useState(false);

  return (
    <button
      type="submit"
      className="button-blue"
      onClick={() => (formValid ? setLoading(true) : setLoading(false))}
    >
      {!loading ? "Post" : "Loading"}
    </button>
  );
};

export default PostButton;
