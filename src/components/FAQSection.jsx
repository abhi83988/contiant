// components/FAQSection.jsx
"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is a cyber insurability rating and why does it matter?",
    answer:
      "A cyber insurability rating assesses your organization's ability to obtain cyber insurance and highlights areas of improvement.",
  },
  {
    question: "How often should I check or update my rating?",
    answer: "You should review your rating at least once a year or after major changes.",
  },
  {
    question: "How do I know if my business is currently insurable?",
    answer: "Our platform gives you real-time insight into your insurability.",
  },
  {
    question: "How can I improve my rating to qualify for better coverage?",
    answer: "We provide recommendations tailored to your security posture.",
  },
  {
    question: "Can I still get a LEXI Rating if I've never had a security assessment before?",
    answer: "Yes, our process works even if you’re new to security assessments.",
  },
  {
    question: "What kinds of documents or reports can I upload to improve my rating?",
    answer: "Security policies, audit reports, and compliance certifications.",
  },
  {
    question: "Is this just for tech companies, or does it apply to any small business?",
    answer: "Any small business can use the LEXI Rating system.",
  },
  {
    question: "How does LEXI Rating help businesses that don't have a security team?",
    answer: "We guide you through improvements without needing an internal security team.",
  },
   {
    question: "What is a cyber insurability rating and why does it matter?",
    answer:
      "A cyber insurability rating assesses your organization's ability to obtain cyber insurance and highlights areas of improvement.",
  },
  {
    question: "How often should I check or update my rating?",
    answer: "You should review your rating at least once a year or after major changes.",
  },
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 8);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {visibleFaqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border border-green-500 rounded overflow-hidden transition-colors duration-300 ${
                isOpen
                  ? "bg-gradient-to-r from-[#001a44] to-[#00b383] text-white"
                  : "bg-white text-black hover:bg-gradient-to-r hover:from-[#001a44] hover:to-[#00b383] hover:text-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center px-4 py-3 text-left font-medium"
              >
                {/* Triangle arrow at start */}
                <span
                  className={`mr-3 transform transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span>{item.question}</span>
              </button>

              {isOpen && (
                <div className="px-11 pb-4 text-sm bg-white text-black">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!showAll && faqs.length > 5 && (
        <div className="mt-6 flex justify-start">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#001a44] text-white px-10 py-2  hover:bg-[#003366]"
          >
            More ▼
          </button>
        </div>
      )}
    </div>
  );
}
