
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                ExamEyeVerify is a leading provider of secure online examination solutions. 
                Our mission is to make online testing accessible, secure, and reliable for 
                educational institutions and organizations worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2025, we've helped thousands of institutions conduct secure 
                online examinations with our advanced AI proctoring and verification systems.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
