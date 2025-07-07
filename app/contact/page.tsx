import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center px-4 relative font-monument">
      {/* Main heading */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span className="text-[#ffffff]">contact </span>
          <span className="text-[#ff3366]">information</span>
          <span className="inline-block ml-2 text-[#ff3366] text-4xl md:text-5xl lg:text-6xl">→</span>
        </h1>
      </div>

      {/* Contact details */}
      <div className="space-y-8 text-center">
        {/* Email */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-[#ffffff] text-2xl md:text-3xl font-medium">contact@thesample.agency</span>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-[#ffffff] text-2xl md:text-3xl font-medium">+84. 899.468.933</span>
        </div>
      </div>

      {/* Navigation links */}
      <div className="mt-20 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="border-[#ff3366] text-[#ffffff] bg-transparent hover:bg-[#ff3366] hover:text-[#ffffff] px-8 py-3 text-lg font-medium rounded-full border-2 inline-block"
        >
          Back to home page
        </Link>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-6 right-6">
        <p className="text-[#d9d9d9] text-sm">© Copyright by THE SAMPLE 2025</p>
      </div>
    </div>
  )
}