"use client";
import { postCall } from "@/services/prelogin-request";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    const handleAuth = () => {
      isLoggedIn ? router.push("/onboarding/welcome") : router.push("/auth/login");
    };
    handleAuth();
  }, [isLoggedIn]);
  return <></>;
}
