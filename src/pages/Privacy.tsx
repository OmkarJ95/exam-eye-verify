
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                Last updated: April 19, 2025
              </p>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
                <p className="text-gray-600">
                  We collect information necessary to provide our examination services, 
                  including but not limited to name, email, and examination recordings.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
                <p className="text-gray-600">
                  Your data is used solely for examination purposes and improving our services. 
                  We do not sell or share your information with third parties.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
                <p className="text-gray-600">
                  We implement industry-standard security measures to protect your data, 
                  including encryption and secure storage practices.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
