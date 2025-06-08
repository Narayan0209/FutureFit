// app/topic/engineering.tsx
"use client";
import React from "react";

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Engineering</h1>
        <p className="text-gray-700 mb-4">
          Engineering is a career that deals with the application of science and technology to solve real-world problems. It offers a wide range of disciplines, each focusing on a particular aspect of technology or design.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Join Engineering?</h2>
        <p className="text-gray-700 mb-4">
          To pursue engineering after 12th grade, students typically appear for entrance examinations. The most popular ones include:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>JEE Main:</strong> For admission to NITs, IIITs, and many state-level colleges.</li>
          <li><strong>JEE Advanced:</strong> For admission into IITs (Indian Institutes of Technology).</li>
          <li><strong>State Entrance Exams:</strong> Like MHT CET, WBJEE, KCET, etc.</li>
          <li><strong>Private University Exams:</strong> VITEEE, SRMJEEE, BITSAT, etc.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Alternative Ways</h2>
        <p className="text-gray-700 mb-4">
          Some universities also admit students based on their 12th board exam results. Additionally, there are diploma-to-degree lateral entry programs.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Types of Engineering</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Computer Science Engineering (CSE)</li>
          <li>Mechanical Engineering (ME)</li>
          <li>Electrical Engineering (EE)</li>
          <li>Civil Engineering (CE)</li>
          <li>Electronics and Communication (ECE)</li>
          <li>Aeronautical Engineering</li>
          <li>Biotechnology</li>
          <li>Information Technology (IT)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Career Opportunities</h2>
        <p className="text-gray-700">
          Engineers can work in various industries including IT, manufacturing, construction, telecommunications, research, and more. Opportunities also exist in government jobs and public sector undertakings (PSUs).
        </p>
      </div>
    </div>
  );
}
