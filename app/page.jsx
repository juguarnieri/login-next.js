"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./loading.css"; 

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/signin");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Carregando...</p>
    </div>
  );
}
