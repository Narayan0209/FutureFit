// app/topic/bba.tsx
"use client";
import React from "react";

export default function BBAPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">BBA (Bachelor of Business Administration)</h1>
        <p className="text-gray-700 mb-4">
          BBA is a professional undergraduate course that provides foundational knowledge in business management, entrepreneurship, marketing, finance, and HR. It&apos;s a stepping stone for leadership and managerial roles.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Join BBA?</h2>
        <p className="text-gray-700 mb-4">
          Students from any stream after 12th can apply. Admissions are either merit-based or through entrance exams like DU JAT, NPAT, IPU CET, and CUET, depending on the university.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Specializations in BBA</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Marketing</li>
          <li>Finance</li>
          <li>Human Resource Management</li>
          <li>International Business</li>
          <li>Business Analytics</li>
          <li>Entrepreneurship</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Career Opportunities</h2>
        <p className="text-gray-700">
          BBA graduates can work in corporate roles across sectors like banking, marketing, HR, finance, and consulting. It also serves as an excellent base for MBA and other management-related higher studies.
        </p>
      </div>
    </div>
  );
}
