import React from "react"

const BaitSvg = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <style>{`
        .primary-fill {
          fill: var(--primary-color);
        }
      `}</style>
      
      {/* Arabic text "بيت" */}
      <text
        x="60"
        y="40"
        textAnchor="middle"
        fontSize="32"
        fontFamily="Arial, sans-serif"
        className="primary-fill"
        fontWeight="bold"
      >
        بيت
      </text>
    </svg>
  )
}

export default BaitSvg
