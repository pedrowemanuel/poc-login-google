"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";

const Home = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <Navbar />
      </>
    );
  } else {
    redirect("/unauthorized");
  }
};

export default Home;
