"use client";

import { useRef, useState } from "react";
import { Zap, Target, Eye, Rocket } from "lucide-react";
import { gsap } from "gsap";

// 🔹 Individual Card Component
const StepCard = ({ stepNumber, title, description, icon: Icon, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);
  const bgRef = useRef(null);

  const toggleCard = () => {
    setIsOpen(!isOpen);

    // Animate card rotation
    gsap.to(cardRef.current, {
      rotateY: isOpen ? 0 : -15,
      transformOrigin: "right center",
      duration: 0.5,
      ease: "power2.out",
    });

    // Animate background layer appearance (lift slightly)
    gsap.to(bgRef.current, {
      y: isOpen ? 0 : -9,
      opacity: isOpen ? 0 : 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className="relative perspective-[1000px]">
      {/* Background Layer Behind the Card */}
      <div
        ref={bgRef}
        className="absolute inset-0 rounded-2xl z-0"
        style={{
          backgroundColor: bgColor,
          opacity: 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      ></div>

      {/* Foreground Card */}
      <div
        ref={cardRef}
        onClick={toggleCard}
        className="relative z-10 p-6 h-[280px] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.4s ease",
        }}
      >
        <div className="relative flex flex-col h-full justify-between">
          {/* Icon */}
          <div className="w-12 h-12 mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-gray-500" />
          </div>

          {/* Title and Description */}
          <div className="text-sm">
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>

          {/* Step Number Badge */}
          <div className="absolute bottom-4 right-4">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow">
              {stepNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔹 Main How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "Answer a Few Questions",
      description: "Complete a short questionnaire about your business and current security practices",
      icon: Zap,
      bgColor: "#3b82f6", // blue
    },
    {
      stepNumber: "02",
      title: "(Optional) Upload an existing security assessment",
      description: "Upload either a Pen Test, CIS Assessment or a Sig Lite Assessment",
      icon: Target,
      bgColor: "#10b981", // green
    },
    {
      stepNumber: "03",
      title: "See Your Report",
      description: "Receive your LEXI Rating, Coverage gap analysis & a comprehensive cyber Insurability Report",
      icon: Eye,
      bgColor: "#facc15", // yellow
    },
    {
      stepNumber: "04",
      title: "Review & Take Action",
      description: "Follow clear next steps to strengthen your posture - and see your LEXI Rating update as you improve.",
      icon: Rocket,
      bgColor: "#ef4444", // red
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How It Works</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <StepCard
            key={idx}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            icon={step.icon}
            bgColor={step.bgColor}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-violet-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          🎁 No Fee, No Credit Card - Find My Lexi Rating Now!
          <br />
          <span className="text-sm opacity-90">No Credit Card Required</span>
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
