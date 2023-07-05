"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>{typeof window !== "undefined" && (window.location.pathname = "/auth/login")}</div>
  );
}
