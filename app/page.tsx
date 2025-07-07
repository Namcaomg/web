import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="bg-[#ff3366] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="bg-[#ff3366] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Products&Solutions
          </Link>
          <Link
            href="/pricing"
            className="bg-[#ff3366] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Pricing
          </Link>
        </div>
        <Link
          href="/contact"
          className="bg-transparent border-2 border-[#ff3366] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#ff3366] transition-colors"
        >
          Contact Us
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-16 md:py-24">
        {/* Main Headline */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            A new <span className="text-[#ff3366]">era</span> of social{" "}
            <span className="text-[#ff3366]">marketing</span>
            <span className="text-[#ff3366] ml-2">↘</span>
          </h1>
        </div>

        {/* Agency Name */}
        <div className="absolute bottom-20 left-20 p-6">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
            <span className="text-[#ff3366]">#THE</span>
            <br />
            <span className="text-[#ff3366]">SAMPLE</span>
            <br />
            <span className="text-white">AGENCY</span>
            <span className="text-[#ff3366] ml-4">↘</span>
          </h2>
        </div>
      </main>
    </div>
  )
}