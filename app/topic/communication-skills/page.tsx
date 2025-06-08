// app/topic/communication-skills.tsx
"use client";
import React from "react";

export default function CommunicationSkillsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Communication Skills</h1>
        <p className="text-gray-700 mb-4">
          Communication skills are essential in every career. Whether verbal or written, the ability to convey information clearly and effectively can greatly impact personal and professional success.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Types of Communication</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Verbal Communication (Speaking)</li>
          <li>Non-Verbal Communication (Body Language, Gestures)</li>
          <li>Written Communication (Emails, Reports)</li>
          <li>Listening Skills</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Improve?</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Practice public speaking and storytelling</li>
          <li>Engage in group discussions</li>
          <li>Read and write regularly</li>
          <li>Take communication workshops or courses</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Benefits</h2>
        <p className="text-gray-700">
          Good communication skills help in job interviews, team collaborations, leadership roles, and networking. They are a key component of soft skills development.
        </p>
      </div>
    </div>
  );
}
