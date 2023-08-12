"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import Login from "./components/Login";

export default function App() {
  const { data: session } = useSession();

  if (session && session.user) {
    redirect("/home");
  }

  return <Login />;
}
