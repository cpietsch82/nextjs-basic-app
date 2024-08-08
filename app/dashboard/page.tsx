'use client';
import Header from "@/components/header";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  let loggedIn = 'No';
  if (session) {
    loggedIn = "logged in as " + session.user?.email;
  }

  console.log(status);

  return (
    <main>
      <Header />
      {loggedIn}
    </main>
  )
}