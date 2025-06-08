// app/topic/bsc.tsx
"use client";
import React from "react";

export default function BScPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">BSc (Bachelor of Science)</h1>
        <p className="text-gray-700 mb-4">
          The Bachelor of Science (BSc) is a degree focused on scientific and technical subjects. It builds strong analytical and research skills and is ideal for students interested in core sciences.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Join BSc?</h2>
        <p className="text-gray-700 mb-4">
          Students who have completed 12th in Science (PCM/PCB) can apply for BSc courses. Admission is mostly merit-based, though some universities conduct entrance exams.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Popular BSc Courses</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>BSc in Physics</li>
          <li>BSc in Chemistry</li>
          <li>BSc in Mathematics</li>
          <li>BSc in Biology</li>
          <li>BSc in Computer Science</li>
          <li>BSc in Biotechnology</li>
          <li>BSc in Environmental Science</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Career Opportunities</h2>
        <p className="text-gray-700">
          BSc graduates can work in research labs, education, IT companies, pharma firms, or government agencies. It also forms a foundation for MSc, MBA, or competitive exams like UPSC, SSC, and others.
        </p>
      </div>
    </div>
  );
}
