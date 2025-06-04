"use client";
import React from "react";
import { useParams } from "next/navigation";

// Define a type-safe map of topics
const topicData: Record<string, string> = {
  engineering: "Engineering is a career that deals with science and technology.",
  medical: "Medical is the field focused on healthcare and treatment.",
  bcom: "Bachelor of Commerce is a degree in business and finance.",
  ba: "Bachelor of Arts includes humanities and social sciences.",
  bsc: "Bachelor of Science is focused on science subjects.",
  bba: "Bachelor of Business Administration focuses on management.",
  bca: "Bachelor of Computer Applications deals with IT and coding.",
  llb: "LLB is a law degree that leads to legal professions.",
};

export default function TopicPage() {
  const params = useParams();
  const slug = params.slug as string; // ✅ Type assertion

  const title = slug.replace(/-/g, " ");
  const description = topicData[slug] || "No data found for this topic.";

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-purple-700 capitalize">{title}</h1>
      <p className="mt-4 text-lg">{description}</p>
    </div>
  );
}
