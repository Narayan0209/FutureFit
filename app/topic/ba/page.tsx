// app/topic/ba.tsx
"use client";
import React from "react";

export default function BAPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">BA (Bachelor of Arts)</h1>
        <p className="text-gray-700 mb-4">
          The Bachelor of Arts (BA) is an undergraduate degree focused on humanities, languages, and social sciences. It’s ideal for students interested in literature, history, psychology, sociology, and related fields.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Join BA?</h2>
        <p className="text-gray-700 mb-4">
          After completing 12th in any stream, students can apply for BA courses. Most colleges offer admission based on merit, while some conduct entrance tests (like DUET, CUET).
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Popular BA Specializations</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>BA in English</li>
          <li>BA in Psychology</li>
          <li>BA in Political Science</li>
          <li>BA in Sociology</li>
          <li>BA in History</li>
          <li>BA in Economics</li>
          <li>BA in Philosophy</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Career Opportunities</h2>
        <p className="text-gray-700">
          BA graduates can pursue careers in teaching, journalism, civil services, law, public relations, content writing, and more. It's also a strong base for postgraduate studies like MA, MBA, or preparation for competitive exams.
        </p>
      </div>
    </div>
  );
}
