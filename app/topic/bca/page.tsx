// app/topic/bca.tsx
"use client";
import React from "react";

export default function BCAPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">BCA (Bachelor of Computer Applications)</h1>
        <p className="text-gray-700 mb-4">
          BCA is an undergraduate degree course in computer applications. It provides a solid foundation in software development, programming, databases, and networking.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Join BCA?</h2>
        <p className="text-gray-700 mb-4">
          Students from any stream (with Mathematics/Computer Applications as a subject) after 12th can apply. Admissions may be merit-based or through entrance exams like IPU CET, CUET, or university-level exams.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Key Subjects</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Programming in C/C++/Java</li>
          <li>Data Structures</li>
          <li>Database Management</li>
          <li>Web Development</li>
          <li>Networking</li>
          <li>Software Engineering</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Career Opportunities</h2>
        <p className="text-gray-700">
          BCA graduates can work as software developers, system analysts, data analysts, web developers, and IT support specialists. Many pursue MCA or enter the IT industry directly.
        </p>
      </div>
    </div>
  );
}
