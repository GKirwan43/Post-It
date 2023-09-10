"use client";

import { TailSpin } from "react-loader-spinner";

import { useState, useEffect } from "react";

type props = {
  text: string;
  isFormValid: () => boolean;
};

const LoadButton = (props: props) => {
  const { text, isFormValid } = props;

  const [loading, setLoading] = useState(false);

  return (
    <button
      type="submit"
      className="button-blue"
      onClick={() => (isFormValid() ? setLoading(true) : setLoading(false))}
      disabled={loading}
    >
      {!loading ? (
        text
      ) : (
        <TailSpin height="25" width="25" color="white" ariaLabel="loading" />
      )}
    </button>
  );
};

export default LoadButton;
