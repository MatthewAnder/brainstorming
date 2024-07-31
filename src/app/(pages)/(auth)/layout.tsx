import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();
  if (user) return redirect("/book");

  return <>{children}</>;
}
