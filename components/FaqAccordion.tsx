"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is your typical response time in DC traffic?",
    a: "Our strategic dispatch network maintains an average arrival time of 30 minutes or less, even during peak congestion, by utilizing dedicated local routes.",
  },
  {
    q: "Do you work with all major insurance providers?",
    a: "Yes, we are preferred partners for most major insurance companies and roadside programs, allowing for direct billing and seamless claim handling.",
  },
  {
    q: "Can you handle electric vehicles (EVs)?",
    a: "Absolutely. Our technicians are specialized in EV recovery, ensuring correct flatbed loading to protect sensitive battery systems and drivetrain components.",
  },
  {
    q: "Is long-distance towing available?",
    a: "We provide both local and long-distance transport. Pricing is competitive and based on total mileage and vehicle specific requirements.",
  },
  {
    q: "Are you available on holidays and late nights?",
    a: "Our service is 24/7/365. We never close, ensuring you have professional authority and assistance even at 3 AM on New Year's Day.",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={i}
            className="glass-panel-cyan group transition-all duration-300"
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => setActiveIndex(isActive ? -1 : i)}
            >
              <span className="font-label-bold text-[18px] text-on-surface group-hover:text-secondary transition-colors">
                {faq.q}
              </span>
              <span
                className={`material-symbols-outlined text-secondary transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-[200px]" : "max-h-0"}`}
            >
              <p className="px-6 pb-6 font-body-md text-on-surface-variant">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
