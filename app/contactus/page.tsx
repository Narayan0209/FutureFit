"use client";
import React, { useState } from "react";
import ChatBot from "../component/ChatBot";

export default function ContactUs() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-16 space-y-12">

        {/* Why Choose Us Section */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">Why Choose Us?</h1>
          <ul className="list-disc list-inside">
            <li className="text-lg text-gray-800">Reliable Information:</li>
            <p className="text-gray-600 mt-1">
              We are committed to providing accurate and up-to-date information to help you make well-informed decisions.
            </p>
            <li className="text-lg text-gray-800 mt-4">Guidance:</li>
            <p className="text-gray-600 mt-1">
              Our resources are designed to cater to the diverse interests and aspirations of students.
            </p>
            <li className="text-lg text-gray-800 mt-4">24/7 Support:</li>
            <p className="text-gray-600 mt-1">We as an organization provide 24/7 support services.</p>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">Contact Us:</h1>
          <p className="text-lg text-gray-800">
            Have questions or need personalized advice? Feel free to reach out to us.
            Our team is here to assist you and provide the support you need to achieve your educational and career goals.
          </p>
          <div className="flex mt-8 justify-center flex-wrap gap-4">
            <button
              className="px-5 py-2 bg-pink-400 text-white rounded-full"
              onClick={() => setIsChatOpen(true)}
            >
              Chat with Us
            </button>
            <button className="px-5 py-2 bg-pink-400 text-white rounded-full">Call Us</button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto bg-gradient-to-r from-indigo-100 via-purple-400 to-pink-400 shadow-2xl rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white text-center mb-4">Send Us a Message</h2>
          <form className="space-y-3">
            <input type="text" placeholder="Name" className="w-full px-3 py-2 rounded border border-white focus:outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 rounded border border-white focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded border border-white focus:outline-none" />
            <textarea placeholder="Message" className="w-full px-3 py-2 rounded border border-white focus:outline-none" />
            <button type="submit" className="w-full bg-white text-purple-700 font-semibold py-2 rounded hover:bg-gray-100">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* ChatBot Component */}
      <ChatBot isOpen={isChatOpen} />
    </div>
  );
}
