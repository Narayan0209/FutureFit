// app/topic/bcom.tsx
"use client";
import React from "react";

export default function BComPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">BCom (Bachelor of Commerce)</h1>
        <p className="text-gray-700 mb-4">
          BCom is a popular undergraduate degree for students interested in commerce, finance, business, and economics. It builds foundational knowledge for careers in banking, accounting, corporate law, and more.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Join BCom?</h2>
        <p className="text-gray-700 mb-4">
          Students who have completed 12th with Commerce or any stream (depending on college criteria) can apply for BCom. Admissions are usually merit-based, based on 12th marks.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Types of BCom</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>BCom General</li>
          <li>BCom Honours</li>
          <li>BCom (Accounting and Finance)</li>
          <li>BCom (Banking & Insurance)</li>
          <li>BCom (Corporate Secretaryship)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Career Opportunities</h2>
        <p className="text-gray-700">
          BCom graduates can pursue careers in accounting, auditing, banking, taxation, finance, and insurance. It also serves as a foundation for higher studies like MCom, MBA, CA, CMA, CS, and CFA.
        </p>
      </div>
    </div>
  );
}
