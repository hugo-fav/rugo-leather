export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Minimalist 'R' Monogram Box */}
      <rect
        x="1"
        y="5"
        width="24"
        height="30"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 12H13.5C15.5 12 17 13 17 15C17 17 15.5 18 13.5 18H7V12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M7 12V28" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 18L17 28" stroke="currentColor" strokeWidth="1.5" />

      {/* Brand Text */}
      <text
        x="36"
        y="27"
        fontFamily="ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.15em"
        fill="currentColor"
      >
        RUGO
      </text>
    </svg>
  );
}
