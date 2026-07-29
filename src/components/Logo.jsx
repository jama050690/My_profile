import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      className={`logo-lockup ${className}`}
      aria-label="Jamshiddin Babajonov — Bosh sahifa"
    >
      <svg
        className="logo-mark"
        width="32"
        height="28"
        viewBox="0 0 56 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M11 8 V28 A6 6 0 0 1 5 34"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M25 8 V32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path
          d="M25 8 H31 A5 5 0 0 1 31 18 H25"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 19 H32 A6.5 6.5 0 0 1 32 32 H25"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo-wordmark hidden sm:inline">
        JB<span className="text-[var(--accent)]">.dev</span>
      </span>
      <img
        className="logo-avatar"
        src="/photo_2025-11-21_19-33-24.jpg"
        alt=""
        aria-hidden="true"
      />
    </Link>
  );
}
