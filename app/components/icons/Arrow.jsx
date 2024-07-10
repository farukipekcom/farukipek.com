import React from "react";

export default function Arrow({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-white group-hover:-rotate-45"
    >
      <path
        d="M13.4142 18.0105L19.4246 12.0001L13.4142 5.98965M19.0711 12.0001H4.57538"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
