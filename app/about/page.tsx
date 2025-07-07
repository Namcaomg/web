import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-center items-center px-8 py-16">
      <div className="max-w-4xl mx-auto text-left space-y-8">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          <span className="text-[#ff3366]">Who are</span> <span className="text-white">we?</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-[#ff3366] text-xl md:text-2xl font-medium">
          The Sample — YouTube & Music Agency for the Digital Generation
        </h2>

        {/* Description paragraphs */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-5xl">
          <p>The Sample is a creative agency built for today's creators, brands, and music artists.</p>

          <p>
            We specialize in YouTube strategy, content production, and music creation, helping you grow your audience,
            amplify your voice, and build a lasting digital presence.
          </p>

          <p>
            Whether you're launching a YouTube channel, producing original tracks, or looking to level up your visual
            content — we provide end-to-end solutions tailored to your goals.
          </p>
        </div>

        {/* Back to home link */}
        <div className="pt-8">
          <Link
            href="/"
            className="border-[#ff3366] text-white hover:bg-[#ff3366] hover:text-white bg-transparent px-8 py-3 text-lg rounded-full border-2 inline-block"
          >
            Back to home page
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-4 right-4 text-sm text-white">© Copyright by THE SAMPLE 2025</div>
    </div>
  )
}