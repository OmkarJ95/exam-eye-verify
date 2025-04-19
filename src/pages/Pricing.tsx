
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Pricing Plans</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic</h2>
              <p className="text-4xl font-bold mb-6">$29<span className="text-lg font-normal text-gray-500">/mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="text-gray-600">Up to 50 exams/month</li>
                <li className="text-gray-600">Basic proctoring</li>
                <li className="text-gray-600">Email support</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional</h2>
              <p className="text-4xl font-bold mb-6">$99<span className="text-lg font-normal text-gray-500">/mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="text-gray-600">Up to 200 exams/month</li>
                <li className="text-gray-600">Advanced AI proctoring</li>
                <li className="text-gray-600">Priority support</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h2>
              <p className="text-4xl font-bold mb-6">Custom</p>
              <ul className="space-y-4 mb-8">
                <li className="text-gray-600">Unlimited exams</li>
                <li className="text-gray-600">Custom features</li>
                <li className="text-gray-600">24/7 support</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
