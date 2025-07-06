import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#000000] text-white relative overflow-hidden">
      {/* Starburst graphic in top right */}
      <div className="absolute top-16 right-16">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 text-[#95ff00]">
            <svg viewBox="0 0 128 128" className="w-full h-full">
              <g transform="translate(64,64)">
                {/* Multiple rays radiating from center */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1="0"
                    x2={Math.cos((i * 22.5 * Math.PI) / 180) * (30 + Math.random() * 20)}
                    y2={Math.sin((i * 22.5 * Math.PI) / 180) * (30 + Math.random() * 20)}
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                ))}
                <circle cx="0" cy="0" r="8" fill="currentColor" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 max-w-6xl">
        {/* Main heading with arrow */}
        <div className="mb-16">
          <div className="flex items-center gap-8 mb-4">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="text-[#95ff00]">Who are</span> <span className="text-white">we?</span>
            </h1>
            <div className="text-[#95ff00] ml-8">
              <svg width="80" height="60" viewBox="0 0 80 60" className="rotate-12">
                <path
                  d="M10 30 L50 30 M35 15 L50 30 L35 45"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium">
            <span className="text-[#95ff00]">The Sample</span>{" "}
            <span className="text-white">— YouTube & Music Agency for the Digital Generation</span>
          </h2>
        </div>

        {/* Body content */}
        <div className="space-y-8 text-lg md:text-xl leading-relaxed max-w-5xl">
          <p className="text-white">
            The Sample is a creative agency built for today's creators, brands, and music artists.
          </p>

          <p className="text-white">
            We specialize in YouTube strategy, content production, and music creation, helping you grow your audience,
            amplify your voice, and build a lasting digital presence.
          </p>

          <p className="text-white">
            Whether you're launching a YouTube channel, producing original tracks, or looking to level up your visual
            content — we provide end-to-end solutions tailored to your goals.
          </p>
        </div>

        {/* Back to home button with arrow */}
        <div className="mt-24 flex flex-col items-center">
          <div className="text-[#95ff00] mb-4">
            <svg width="60" height="40" viewBox="0 0 60 40" className="rotate-45">
              <path
                d="M10 20 L40 20 M25 5 L40 20 L25 35"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <button
            className="border-[#95ff00] text-white hover:bg-[#95ff00] hover:text-black bg-transparent px-8 py-3 text-lg rounded-full border "
            
          >
            <Link href="/">Back to home page</Link>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 right-8">
        <p className="text-white text-sm">© Copyright by THE SAMPLE 2025</p>
      </div>
    </div>
  )
}
