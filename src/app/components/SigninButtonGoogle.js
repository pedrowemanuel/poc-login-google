"use client";

import React from "react";
import { signIn } from "next-auth/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SigninButtonGoogle = () => {
  return (
    <button
      type="submit"
      className="flex w-full justify-center items-center rounded-md bg-gray-50 px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => signIn("google")}
    >
      <FontAwesomeIcon icon={faGoogle} className="w-4 h-4 mr-2" />
      Entrar com o Google
    </button>
  );
};

export default SigninButtonGoogle;
