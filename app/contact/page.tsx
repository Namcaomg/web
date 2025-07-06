import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center p-8 relative">
      {/* Main heading */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
          <span className="text-[#ffffff]">contact </span>
          <span className="text-[#95ff00]">information</span>
        </h1>
      </div>

      {/* Contact details */}
      <div className="space-y-8 mb-16 relative">
        {/* Email section with arrow */}
        <div className="flex items-center gap-4 relative">
          {/* Curved arrow pointing to email */}
          <div className="absolute -left-20 -top-8">
            <svg width="60" height="40" viewBox="0 0 60 40" className="text-[#95ff00]">
              <path
                d="M10 30 Q20 10 40 15 Q50 18 45 25"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M40 20 L45 25 L40 30"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Mail Icon SVG */}
          <svg
            className="w-8 h-8 text-[#95ff00]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span className="text-[#ffffff] text-2xl md:text-3xl font-medium">contact@thesample.agency</span>
        </div>

        {/* Phone section with arrow */}
        <div className="flex items-center gap-4 relative">
          {/* Phone Icon SVG */}
          <svg
            className="w-8 h-8 text-[#95ff00]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-[#ffffff] text-2xl md:text-3xl font-medium">+84. xxx.xxx.xxx</span>

          {/* Curved arrow pointing to phone */}
          <div className="absolute -right-20 -top-4">
            <svg width="60" height="40" viewBox="0 0 60 40" className="text-[#95ff00]">
              <path
                d="M50 10 Q40 30 20 25 Q10 22 15 15"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M20 20 L15 15 L20 10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Back to home button with arrow */}
      <div className="relative">
        {/* Curved arrow pointing to button */}
        <div className="absolute -left-20 -top-12">
          <svg width="80" height="60" viewBox="0 0 80 60" className="text-[#95ff00]">
            <path
              d="M20 10 Q30 40 60 35 Q70 33 65 40"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M60 35 L65 40 L60 45"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <button
          className="border-[#95ff00] border-2 text-[#ffffff] bg-transparent hover:bg-[#95ff00] hover:text-[#000000] px-8 py-3 text-lg font-medium rounded-full transition-colors"
        >
            <Link href="/">Back to home page</Link>
        </button>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 right-8">
        <p className="text-[#ffffff] text-sm">© Copyright by THE SAMPLE 2025</p>
      </div>
    </div>
  )
}