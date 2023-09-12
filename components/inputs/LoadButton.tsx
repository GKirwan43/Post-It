"use client";

import { TailSpin } from "react-loader-spinner";

import { useState, useEffect, MouseEventHandler } from "react";

type props = {
  text: string;
  loading: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const LoadButton = (props: props) => {
  const { text, loading, onClick } = props;

  return (
    <button
      type="submit"
      className="button-blue"
      onClick={onClick}
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
