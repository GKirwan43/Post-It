"use client";

var Spinner = require('react-spinkit');

import { useState, useEffect } from "react";

type PostButtonProps = {
  postButtonPressed: () => boolean;
};

const PostButton = (props: PostButtonProps) => {
  const { postButtonPressed } = props;

  const [loading, setLoading] = useState(true);

  return (
    <button
      type="submit"
      className="button-blue"
      onClick={() => (postButtonPressed() ? setLoading(true) : setLoading(false))}
    >
      {!loading ? "Post" : (
        <Spinner name='three-bounce' color="white" className=""/>
      )}
    </button>
  );
};

export default PostButton;
