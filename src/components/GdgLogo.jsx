export function GdgLogo({ width = 34, height = 22, className = '' }) {
  return (
    <svg
      viewBox="0 0 36 24"
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12.5 5.5 4.5 12l8 6.5"
        stroke="#4285F4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 5.5 7.5 9.5"
        stroke="#EA4335"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M23.5 5.5 31.5 12l-8 6.5"
        stroke="#34A853"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 18.5 28.5 14.5"
        stroke="#FBBC04"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
