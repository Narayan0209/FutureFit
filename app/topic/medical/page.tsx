// app/topic/medical.tsx
"use client";
import React from "react";

export default function MedicalPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Medical</h1>
        <p className="text-gray-700 mb-4">
          The medical field involves the study and practice of medicine, healthcare, and allied sciences. It is a noble profession focused on healing and saving lives.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">How to Join Medical?</h2>
        <p className="text-gray-700 mb-4">
          After 12th (with PCB), students can pursue medical courses by appearing in entrance exams. The most popular one is:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>NEET (UG):</strong> Required for MBBS, BDS, BAMS, BHMS, BPT, and other allied medical courses across India.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Alternative Paths</h2>
        <p className="text-gray-700 mb-4">
          Apart from MBBS/BDS, students can choose alternative careers in paramedical sciences, nursing, pharmacy, and medical laboratory technology.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Popular Medical Fields</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>MBBS (Bachelor of Medicine and Bachelor of Surgery)</li>
          <li>BDS (Bachelor of Dental Surgery)</li>
          <li>BPT (Bachelor of Physiotherapy)</li>
          <li>BAMS (Ayurveda)</li>
          <li>BHMS (Homeopathy)</li>
          <li>Pharmacy</li>
          <li>Radiology, Anesthesia Technology</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-6 mb-2">Career Opportunities</h2>
        <p className="text-gray-700">
          Medical professionals can work in hospitals, private practices, research labs, public health departments, pharma companies, and NGOs. Doctors can also pursue postgraduate studies (MD/MS) for specialization.
        </p>
      </div>
    </div>
  );
}
