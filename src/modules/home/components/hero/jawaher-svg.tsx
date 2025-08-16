import React from "react"

const JawaherSvg = ({ className }: { className?: string }) => {
  return (
    <svg
      width="180"
      height="60"
      viewBox="0 0 180 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <style>{`
        .primary-fill {
          fill: var(--primary-color);
        }
      `}</style>
      
      {/* Arabic text "الجواهر" */}
      <text
        x="90"
        y="40"
        textAnchor="middle"
        fontSize="32"
        fontFamily="Arial, sans-serif"
        className="primary-fill"
        fontWeight="bold"
      >
        الجواهر
      </text>
    </svg>
  )
}

export default JawaherSvg
