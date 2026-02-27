export function ParasiteIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Crescent-shaped tachyzoite body */}
      <path
        d="M16 40C12 28 20 12 36 10C44 8 52 14 54 24C56 34 48 46 36 50C24 54 20 52 16 40Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Inner organelle - conoid */}
      <ellipse cx="38" cy="18" rx="4" ry="6" fill="currentColor" opacity="0.4" />
      {/* Nucleus */}
      <circle cx="34" cy="32" r="6" fill="currentColor" opacity="0.3" />
      {/* Apical end detail */}
      <path
        d="M42 12C44 10 46 12 44 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}
