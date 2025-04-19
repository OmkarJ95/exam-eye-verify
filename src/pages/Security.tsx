
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Security</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              We take the security of your exams and data seriously. Our platform implements multiple layers of protection:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li>End-to-end encryption for all data transmission</li>
              <li>Secure authentication with OTP verification</li>
              <li>AI-powered proctoring to prevent cheating</li>
              <li>Regular security audits and penetration testing</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
