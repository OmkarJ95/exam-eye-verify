
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Online education"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">The Future of Online Examinations</h2>
                <p className="text-gray-600 mb-4">
                  Explore how AI and technology are transforming the way we conduct examinations.
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Study tips"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Effective Online Study Strategies</h2>
                <p className="text-gray-600 mb-4">
                  Learn the best practices for preparing and taking online exams.
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Security"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Ensuring Exam Integrity</h2>
                <p className="text-gray-600 mb-4">
                  Discover how we maintain security and fairness in online examinations.
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
