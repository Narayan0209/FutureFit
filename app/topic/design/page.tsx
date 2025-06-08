// app/topic/design.tsx
"use client";
import React from "react";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Design</h1>
        <p className="text-gray-700 mb-4">
          Design is a creative career that involves visualizing, creating, and implementing ideas to solve problems and improve aesthetics. It includes fashion, graphic, interior, industrial, and UX/UI design fields.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Join Design?</h2>
        <p className="text-gray-700 mb-4">
          Students from any stream after 12th can apply for design programs. Admission is mostly through entrance exams such as:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>NID DAT:</strong> For admission to National Institute of Design.</li>
          <li><strong>UCEED:</strong> For IITs offering B.Des programs.</li>
          <li><strong>NIFT Entrance Exam:</strong> For fashion and textile design.</li>
          <li><strong>Private College Exams:</strong> MITID, Pearl Academy, UID, etc.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Popular Design Fields</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Graphic Design</li>
          <li>Fashion Design</li>
          <li>Interior Design</li>
          <li>Product & Industrial Design</li>
          <li>Animation & Multimedia Design</li>
          <li>UI/UX Design</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Career Opportunities</h2>
        <p className="text-gray-700">
          Designers can work in fashion houses, media agencies, product companies, architecture firms, or as freelancers. Design skills are in high demand in the digital world, especially in UI/UX and branding.
        </p>
      </div>
    </div>
  );
}
