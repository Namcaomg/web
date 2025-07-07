import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center px-8 py-12">
      <div className="max-w-4xl w-full text-left space-y-8">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
          <span className="text-white">Our </span>
          <span className="text-[#ff3366]">Products</span>
          <span className="text-white"> & </span>
          <span className="text-[#ff3366]">Solutions</span>
        </h1>

        {/* Services List */}
        <div className="space-y-6 text-2xl md:text-3xl lg:text-4xl font-bold">
          <div>
            <span className="text-[#ff3366]">YouTube</span>
            <span className="text-white"> Channel Development</span>
          </div>

          <div>
            <span className="text-[#ff3366]">Video</span>
            <span className="text-white"> Editing & </span>
            <span className="text-[#ff3366]">Creative</span>
            <span className="text-white"> Production</span>
          </div>

          <div>
            <span className="text-white">Content </span>
            <span className="text-[#ff3366]">Strategy</span>
            <span className="text-white"> & </span>
            <span className="text-[#ff3366]">SEO</span>
            <span className="text-white"> Optimization</span>
          </div>

          <div>
            <span className="text-[#ff3366]">Thumbnail</span>
            <span className="text-white"> Design & Metadata Tuning</span>
          </div>

          <div>
            <span className="text-white">Music </span>
            <span className="text-[#ff3366]">Production</span>
            <span className="text-white"> & Audio Branding</span>
          </div>

          <div>
            <span className="text-white">Custom </span>
            <span className="text-[#ff3366]">Beats, Mixing</span>
            <span className="text-white"> & </span>
            <span className="text-[#ff3366]">Mastering</span>
          </div>

          <div>
            <span className="text-white">Growth Analytics & </span>
            <span className="text-[#ff3366]">Monetization</span>
            <span className="text-white"> Planning</span>
          </div>
        </div>

        {/* Back to home link */}
        <div className="pt-12">
          <Link
            href="/"
            className="border-[#ff3366] text-white bg-transparent hover:bg-[#ff3366] hover:text-white px-8 py-3 text-lg font-medium rounded-full border-2 inline-block"
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