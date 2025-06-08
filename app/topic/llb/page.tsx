// app/topic/llb.tsx
"use client";
import React from "react";

export default function LLBPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">LLB (Bachelor of Laws)</h1>
        <p className="text-gray-700 mb-4">
          LLB is an undergraduate law degree that prepares students for a career in the legal profession. It is a 3-year course after graduation or a 5-year integrated course after 12th (e.g., BA LLB, BBA LLB).
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Join LLB?</h2>
        <p className="text-gray-700 mb-4">
          For 5-year integrated courses, students can apply after 12th through entrance exams like CLAT, LSAT, AILET, and SLAT. For 3-year LLB, graduation is required.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Subjects Covered</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Constitutional Law</li>
          <li>Criminal Law</li>
          <li>Contract Law</li>
          <li>Administrative Law</li>
          <li>Human Rights</li>
          <li>International Law</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Career Opportunities</h2>
        <p className="text-gray-700">
          After completing LLB, graduates can practice as lawyers, become legal advisors, public prosecutors, judges (through judicial exams), or pursue further studies like LLM.
        </p>
      </div>
    </div>
  );
}
