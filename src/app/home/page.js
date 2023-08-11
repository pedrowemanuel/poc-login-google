"use client";

import React from "react";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex ml-auto p-5">
        <img src={session.user.image} className="2xs rounded-full mr-4" />
        <div>
          <p className="text-sky-600">{session.user.name}</p>
          <p className="text-sky-600">{session.user.email}</p>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-red-600"
          >
            Sair
          </button>
        </div>
      </div>
    );
  } else {
    redirect("/unauthorized");
  }
};

export default Home;
