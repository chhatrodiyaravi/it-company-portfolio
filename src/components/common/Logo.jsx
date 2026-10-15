import React from "react";
import { company } from "../../data";

function Logo({ className = "size-9", textClassName = "font-display font-semibold text-ink-950 text-lg" }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`relative grid ${className} place-items-center rounded-xl bg-ink-950 text-white shadow-md shadow-brand-950/20 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105`}>
       
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 text-brand-400"
          aria-hidden="true"
        >
          <path
            d="M9 6v20M23 6v20M9 16h14M9 6h4M23 26h-4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="6" r="2" fill="#ffffff" />
          <circle cx="23" cy="26" r="2" fill="#ffffff" />
          <circle cx="16" cy="16" r="2.5" fill="currentColor" />
        </svg>

        
      </div>
      <span className={`brand-wordmark ${textClassName}`} data-text={company.name}>
        {company.name}
      </span>
    </div>
  );
}

export default Logo;
