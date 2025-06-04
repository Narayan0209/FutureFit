"use client";
import React from "react";
import { useRouter } from "next/navigation";

const sections = [
  {
    id: "career",
    title: "Career Opportunities",
    items: [
      { title: "Engineering" },
      { title: "Medical" },
      { title: "BCom" },
      { title: "BA" }, // Removed extra space
      { title: "BSC" },
      { title: "BBA" },
      { title: "BCA" },
      { title: "LLB" },
    ],
  },
  {
    id: "skills",
    title: "Skill Development",
    items: [
      { title: "Communication Skills" },
      { title: "Computer Skills" },
      { title: "Leadership" },
      { title: "Public Speaking" },
      { title: "Soft Skills" },
    ],
  },
  {
    id: "exams",
    title: "Competitive Exams",
    items: [
      { title: "UPSC - Civil Services" },
      { title: "SSC - Government Jobs" },
      { title: "IBPS/Bank PO" },
      { title: "Defence (NDA/CDS)" },
      { title: "Railway Exams (RRB)" },
      { title: "CAT - MBA Entrance" },
      { title: "CLAT - Law Entrance" },
      { title: "CUET - UG Entrance" },
    ],
  },
  {
    id: "smart",
    title: "Smart Learning",
    items: [
      { title: "Your Tutor" },
      { title: "Learn Anytime" },
      { title: "Syllabus" },
    ],
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <div className="p-4 py-8 bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-400">
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          <div className="md:w-1/2 text-left space-y-2">
            <h1 className="text-4xl ml-20 font-bold text-gray-800">
              What to do next after 12th?
            </h1>
            <p className="text-xl ml-20 text-gray-600 font-medium">
              A roadmap to future
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 hidden md:block relative">
            <img
              src="/img.png"
              alt="Future Fit Illustration"
              className="w-auto h-auto ml-20 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between p-4 mt-8">
          <div className="m-auto text-center space-y-2">
            <p className="text-gray-700 text-center">
              <strong>Future Fit</strong>
            </p>
            <p>
              is a platform designed to guide students after completing their
              12th grade. We provide detailed insights into various career
              paths, entrance exams, and skill-development programs. Our goal
              is to help students make confident, informed decisions about
              their future.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto p-4 scroll-smooth">
        <h1 className="text-3xl text-center text-purple-700 font-bold mb-2">
          Our Services
        </h1>
        <h6 className="text-center text-lg text-gray-700 mb-14">
          We offer a comprehensive range of services
        </h6>

        {sections.map((section, secIndex) => (
          <div key={secIndex} id={section.id} className="mb-16">
            <h2 className="text-2xl text-purple-700 font-bold mb-6">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    router.push(
                      `/topic/${item.title.trim().toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                  className="cursor-pointer bg-purple-100 hover:bg-purple-200 transition rounded-xl shadow-lg min-h-[50px] flex items-center justify-center text-center p-4"
                >
                  <p className="text-md font-semibold text-purple-800">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
