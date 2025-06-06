"use client";
import React from "react";
import { useRouter } from "next/navigation";

const sections = [
  {
    id: "career",
    title: "Career Opportunities",
    items: [
      { title: "Engineering", image: "/images/engineering.avif" },
      { title: "Design", image: "/images/design.avif" },
      { title: "Medical", image: "/images/medical title.webp" },
      { title: "BCom", image: "/images/bcom.avif" },
      { title: "BA", image: "/images/arts2.avif" },
      { title: "BSC", image: "/images/bsc.avif" },
      { title: "BBA", image: "/images/bba.avif" },
      { title: "BCA", image: "/images/cs.webp" },
      { title: "LLB", image: "/images/law.webp" },
    ],
  },
  {
    id: "skills",
    title: "Skill Development",
    items: [
      { title: "Communication Skills", image: "/images/meetings.avif" },
      { title: "Computer Skills", image: "/images/computer.avif" },
      { title: "Leadership", image: "/images/leadership.avif" },
      { title: "Public Speaking", image: "/images/publicspeaking.webp" },
      { title: "Soft Skills", image: "/images/softskills.webp" },
    ],
  },
  {
    id: "exams",
    title: "Competitive Exams",
    items: [
      { title: "UPSC - Civil Services", image: "/images/UPSC.png" },
      { title: "SSC - Government Jobs", image: "/images/ssc.png" },
      { title: "IBPS/Bank PO", image: "/images/IBPS_LOGO.png" },
      { title: "Defence", image: "/images/Defense.webp" },
      { title: "Railway Exams (RRB)", image: "/images/rrb.webp" },
      { title: "CAT - MBA Entrance", image: "/images/cat.webp" },
      { title: "CLAT - Law Entrance", image: "/images/clat.webp" },
      { title: "CUET - UG Entrance", image: "/images/CUET.webp" },
    ],
  },
  {
    id: "smart",
    title: "Smart Learning",
    items: [
      { title: "Your Tutor", image: "/images/tutor.avif" },
      { title: "Learn Anytime", image: "/images/learnanytime.avif" },
      { title: "Syllabus", image: "/images/exams.webp" },
    ],
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <div className="p-4 py-8 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400">
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
                  className="cursor-pointer relative group overflow-hidden rounded-xl shadow-md transition-transform hover:scale-105 h-48 w-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold text-center px-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
