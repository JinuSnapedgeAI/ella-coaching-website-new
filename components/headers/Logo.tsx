export default function Logo() {
  return (
    <div
      className="logo loading__fade fade-in"
      data-duration="1.2"
      data-delay="300"
    >
      <a href="#home" className="logo__link">
        {/* logo icon — sunrise with butterfly motif */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          {/* rounded square background */}
          <rect width="50" height="50" rx="16.7" fill="#4a3f4f" />
          {/* sunrise glow */}
          <circle cx="25" cy="32" r="14" fill="#fbe3c8" opacity=".35" />
          {/* sun */}
          <circle cx="25" cy="28" r="8" fill="#fbe3c8" />
          <circle cx="25" cy="28" r="5.5" fill="#fff8ed" opacity=".7" />
          {/* sun rays */}
          <g stroke="#fbe3c8" strokeWidth="1.2" strokeLinecap="round" opacity=".5">
            <line x1="25" y1="18" x2="25" y2="15" />
            <line x1="31" y1="20" x2="33.5" y2="18" />
            <line x1="19" y1="20" x2="16.5" y2="18" />
            <line x1="34" y1="26" x2="37" y2="25.5" />
            <line x1="16" y1="26" x2="13" y2="25.5" />
          </g>
          {/* horizon hill */}
          <path d="M5 34 Q15 28 25 32 T45 30 V42 Q45 50 37 50 H13 Q5 50 5 42Z" fill="#d5e2d6" />
          {/* butterfly */}
          <g transform="translate(25 16)">
            <path d="M0 0 C-6 -5 -9 -3 -7 1 C-9 5 -6 7 0 2Z" fill="#f2d5cf" opacity=".9" />
            <path d="M0 0 C6 -5 9 -3 7 1 C9 5 6 7 0 2Z" fill="#e3dcef" opacity=".9" />
            <line x1="0" y1="-2" x2="0" y2="4" stroke="#fffaf6" strokeWidth=".6" />
          </g>
          {/* sparkle */}
          <circle cx="35" cy="12" r="1.2" fill="#fffaf6" opacity=".6" />
          <circle cx="14" cy="14" r=".8" fill="#fffaf6" opacity=".4" />
        </svg>
        {/* logo text */}
        <span className="logo-text">Ella<sup style={{ fontSize: "0.5em", verticalAlign: "super" }}>+</sup></span>
      </a>
    </div>
  );
}
