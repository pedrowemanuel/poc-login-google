"use client";

import React from "react";
export default () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col pt-10">
        <img src="undraw_access_denied_re_awnf.svg" className="w-96" />
        <p className="text-red-600 text-xl mt-4">Acesso negado!</p>
        <a className="text-sky-600 text-xl mt-4" href="/">
          Fazer Login
        </a>
      </div>
    </>
  );
};
