import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#000000] text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Our <span className="text-[#95ff00]">Products</span> & <span className="text-[#95ff00]">Solutions</span>
          </h1>
          <div className="flex justify-center">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-[#95ff00]">
              <path d="M30 35L45 20H35V5H25V20H15L30 35Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Services List */}
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="text-3xl md:text-4xl font-bold">
            <span className="text-[#95ff00]">YouTube</span> Channel Development
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            <span className="text-[#95ff00]">Video</span> Editing & <span className="text-[#95ff00]">Creative</span>{" "}
            Production
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            Content <span className="text-[#95ff00]">Strategy</span> & <span className="text-[#95ff00]">SEO</span>{" "}
            Optimization
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            <span className="text-[#95ff00]">Thumbnail</span> Design & Metadata Tuning
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            Music <span className="text-[#95ff00]">Production</span> & Audio Branding
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            Custom <span className="text-[#95ff00]">Beats, Mixing</span> &{" "}
            <span className="text-[#95ff00]">Mastering</span>
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            Growth Analytics & <span className="text-[#95ff00]">Monetization</span> Planning
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-[#95ff00]">
              <path
                d="M15 5L5 15L15 25M5 15H35"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <button
              className="bg-transparent border-[#95ff00] border-2 text-white hover:bg-[#95ff00] hover:text-black px-8 py-3 text-lg rounded-full"
            >
            <Link href="/">Back to home page</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-80">
        <div className="flex items-end gap-1 h-64">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#95ff00] w-3"
              style={{
                height: `${Math.random() * 200 + 50}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-6 right-6 text-sm text-[#d9d9d9]">© Copyright by THE SAMPLE 2025</div>
    </div>
  )
}