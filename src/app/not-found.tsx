
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
          <p className="text-gray-500 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
