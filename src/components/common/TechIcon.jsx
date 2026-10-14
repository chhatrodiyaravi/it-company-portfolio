import React from "react";

// Standard SVG tech brand icons for web technologies
export function TechIcon({ id, className = "size-6" }) {
  const normId = (id || "").toLowerCase();

  switch (normId) {
    case "react":
    case "react.js":
    case "react native":
      return (
        <svg viewBox="0 0 115 102" fill="none" className={className} aria-label="React">
          <ellipse cx="57.5" cy="51" rx="54" ry="20" stroke="#00D8FF" strokeWidth="4.5" transform="rotate(30 57.5 51)" />
          <ellipse cx="57.5" cy="51" rx="54" ry="20" stroke="#00D8FF" strokeWidth="4.5" transform="rotate(90 57.5 51)" />
          <ellipse cx="57.5" cy="51" rx="54" ry="20" stroke="#00D8FF" strokeWidth="4.5" transform="rotate(150 57.5 51)" />
          <circle cx="57.5" cy="51" r="9" fill="#00D8FF" />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="JavaScript">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 17.5c.8.5 1.6.8 2.5.8 1.4 0 2.2-.7 2.2-2.1v-6.7h-2.1v6.7c0 .6-.3.9-.8.9-.4 0-.8-.1-1.1-.3l-.7.7zm8.2.8c2.4 0 3.8-1.3 3.8-3.4 0-1.9-1.2-2.8-2.9-3.5-.9-.4-1.3-.7-1.3-1.3 0-.5.4-.9 1.2-.9.7 0 1.3.2 1.8.5l.6-1.5c-.6-.4-1.4-.6-2.4-.6-2.1 0-3.4 1.3-3.4 3.2 0 1.8 1.1 2.8 2.8 3.5 1 .4 1.4.8 1.4 1.4 0 .6-.5 1-1.4 1-.9 0-1.6-.3-2.2-.8l-.7 1.4c.7.6 1.7.9 2.7.9z" fill="#000000" />
        </svg>
      );

    case "html":
    case "html5":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="HTML5">
          <path d="M3 2l1.6 18.2L12 22.4l7.4-2.2L21 2H3zm14.8 5.6h-7.9l.2 2.3h7.5l-.6 6.7L12 18.1l-5-.1.2-2.3h2.3l-.1 1.2 2.6.7 2.7-.7.3-3.1H7l-.5-6h11.6l-.3 2.3z" fill="#E34F26" />
        </svg>
      );

    case "css":
    case "css3":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="CSS3">
          <path d="M3 2l1.6 18.2L12 22.4l7.4-2.2L21 2H3zm14.8 5.6h-7.9l.2 2.3h7.5l-.6 6.7L12 18.1l-5-.1.2-2.3h2.3l-.1 1.2 2.6.7 2.7-.7.3-3.1H7l-.5-6h11.6l-.3 2.3z" fill="#1572B6" />
        </svg>
      );

    case "tailwind":
    case "tailwind css":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Tailwind CSS">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
        </svg>
      );

    case "node":
    case "node.js":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Node.js">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" fill="#5FA04E" />
          <path d="M12 7a3 3 0 013 3v4a3 3 0 01-6 0v-4a3 3 0 013-3z" fill="#5FA04E" opacity="0.6" />
        </svg>
      );

    case "express":
    case "express.js":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Express.js">
          <rect width="24" height="24" rx="4" fill="#18181b" />
          <text x="5" y="16" fill="#f4f4f5" fontFamily="monospace" fontWeight="bold" fontSize="9">ex</text>
        </svg>
      );

    case "python":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Python">
          <path d="M11.9 2c-3.5 0-4.3 1.5-4.3 3.1v2.3h4.4v.6H4.8C3.2 8 2 9.2 2 12.5s1.1 4.5 2.8 4.5h1.7v-2.3c0-1.7 1.4-3.1 3.1-3.1h4.4c1.4 0 2.5-1.1 2.5-2.5V5.1C16.5 3.5 15.4 2 11.9 2zm-1.3 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
          <path d="M12.1 22c3.5 0 4.3-1.5 4.3-3.1v-2.3H12v-.6h7.2c1.6 0 2.8-1.2 2.8-4.5s-1.1-4.5-2.8-4.5h-1.7v2.3c0 1.7-1.4 3.1-3.1 3.1H10c-1.4 0-2.5 1.1-2.5 2.5v4c0 1.6 1.1 3.1 4.6 3.1zm1.3-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B" />
        </svg>
      );

    case "django":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Django">
          <rect width="24" height="24" rx="4" fill="#092E20" />
          <text x="4" y="16" fill="#44B78B" fontFamily="serif" fontWeight="bold" fontSize="11">dj</text>
        </svg>
      );

    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="MongoDB">
          <path d="M12 2C12 2 6 9.5 6 14.5c0 3.3 2.7 6 6 6s6-2.7 6-6C18 9.5 12 2 12 2zm0 17c-2.5 0-4.5-2-4.5-4.5 0-2.8 3.5-7.7 4.5-9.1v13.6z" fill="#47A248" />
        </svg>
      );

    case "mysql":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="MySQL">
          <path d="M12 3C7 3 3 6.6 3 11c0 3.3 2.2 6.2 5.5 7.4l-.5 2.6 3.2-1.6c.3 0 .5.1.8.1 5 0 9-3.6 9-8s-4-8.5-9-8.5zm0 14c-3.9 0-7-2.7-7-6s3.1-6 7-6 7 2.7 7 6-3.1 6-7 6z" fill="#00758F" />
          <path d="M14 9l-2 4-2-4h4z" fill="#F29111" />
        </svg>
      );

    case "postgres":
    case "postgresql":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="PostgreSQL">
          <path d="M12 3C7.5 3 4 6.8 4 11.5c0 3.4 1.9 6.3 4.8 7.7L8 22l3.8-1.6c.7.1 1.4.1 2.2.1 4.5 0 8-3.8 8-8.5S16.5 3 12 3z" fill="#4169E1" />
          <circle cx="10" cy="10" r="1.5" fill="#FFFFFF" />
          <circle cx="14" cy="10" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case "git":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Git">
          <path d="M21.7 10.8L13.2 2.3c-.6-.6-1.5-.6-2.1 0L9 4.4l2.7 2.7c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.6 2.6c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.5-.4-2.1L13 9.9v5.3c.2.2.3.4.3.7 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.7.4-1.3 1-1.6v-5c-.6-.3-1-.9-1-1.6 0-.4.1-.7.3-1L7.3 6 2.3 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.8-8.8c.6-.5.6-1.4 0-2z" fill="#F05032" />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="GitHub">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "docker":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Docker">
          <path d="M13.9 8.2h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2H8.3V8.2zm-2.7 0h2.2v2.2H5.6V8.2zm5.5-2.8h2.2v2.2h-2.2V5.4zm-2.8 0h2.2v2.2H8.3V5.4zm8.3 5.5h2.2v2.2h-2.2v-2.2zm-2.8 0h2.2v2.2h-2.2v-2.2zm-2.8 0h2.2v2.2h-2.2v-2.2zm-2.8 0h2.2v2.2H8.3v-2.2zm-2.7 0h2.2v2.2H5.6v-2.2zM23 12.5c-.5-.4-1.5-.5-2.3-.3-.2-.7-.7-1.3-1.4-1.6l-.6-.2-.3.6c-.3.7-.3 1.5 0 2.2-.7.4-1.8.4-2.4.4H2.4c-.4 1.6 0 3.3.9 4.6 1.5 2.1 4.1 3.4 6.7 3.4 5.9 0 10.9-3.9 12.3-9.5.4 0 .8.2 1.2.2.6 0 1.2-.2 1.7-.5l.4-.3-.6-.6c-.6-.7-1.1-1.3-1.7-1.9z" fill="#2496ED" />
        </svg>
      );

    case "aws":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="AWS">
          <rect width="24" height="24" rx="4" fill="#232F3E" />
          <path d="M6 13.5c1.8 1.4 4.1 2.2 6.5 2.2 2.2 0 4.3-.7 6-1.9.3-.2.6.1.4.4-1.9 2-4.5 3-7.2 3-2.6 0-5.1-.9-7-2.6-.2-.2 0-.4.3-.1z" fill="#FF9900" />
          <text x="5" y="11" fill="#FFFFFF" fontWeight="bold" fontSize="7" fontFamily="sans-serif">AWS</text>
        </svg>
      );

    case "expo":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Expo">
          <path d="M12 2L2 20h4.5l5.5-10.2L17.5 20H22L12 2z" />
        </svg>
      );

    case "shopify":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Shopify">
          <path d="M19.5 7.5L14.2 2H9.8L5.5 7.5l-1 12.7c0 .9.7 1.8 1.7 1.8h11.6c.9 0 1.7-.8 1.7-1.8l-1-12.7z" fill="#95BF47" />
          <path d="M13.5 8l-2.5 7-1.5-2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    case "stripe":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Stripe">
          <rect width="24" height="24" rx="4" fill="#635BFF" />
          <path d="M12.5 8.2c-1.3 0-2.1.6-2.1 1.6 0 1.7 2.5 1.4 2.5 2.3 0 .4-.4.6-1 .6-.9 0-1.7-.4-2.1-.8l-.5 1.5c.6.5 1.6.8 2.6.8 1.6 0 2.4-.7 2.4-1.8 0-1.8-2.6-1.5-2.6-2.3 0-.3.3-.5.9-.5.7 0 1.4.3 1.8.6l.5-1.5c-.6-.4-1.5-.6-2.4-.6z" fill="#FFFFFF" />
        </svg>
      );

    case "figma":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Figma">
          <path d="M9 12a3 3 0 110-6h3v6H9z" fill="#F24E1E" />
          <path d="M12 6h3a3 3 0 010 6h-3V6z" fill="#FF7262" />
          <path d="M12 12h3a3 3 0 010 6h-3v-6z" fill="#1ABCFE" />
          <path d="M9 12h3v6a3 3 0 11-3-3v-3z" fill="#0ACF83" />
          <circle cx="9" cy="21" r="3" fill="#A259FF" />
        </svg>
      );

    default:
      return (
        <div className={`grid place-items-center rounded-md bg-brand-100 font-display text-[11px] font-bold text-brand-800 ${className}`}>
          {id?.slice(0, 2).toUpperCase() || "IT"}
        </div>
      );
  }
}

export default TechIcon;
