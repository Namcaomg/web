import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#000000] p-6 font-monument">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <Link
          href="/"
          className="border-[#ff3366] text-[#ffffff] bg-transparent hover:bg-[#ff3366] hover:text-[#000000] rounded-full px-6 py-2 border-2 inline-block"
        >
          Back to home page
        </Link>

        <div className="flex items-center gap-2">
          <h1 className="text-[#ffffff] text-4xl font-bold">Pricing</h1>
          <div className="text-[#ff3366] text-4xl">↘</div>
        </div>

        <Link
          href="/contact"
          className="border-[#ff3366] text-[#ffffff] bg-transparent hover:bg-[#ff3366] hover:text-[#000000] rounded-full px-6 py-2 border-2 inline-block"
        >
          Contact for best deal!
        </Link>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* YouTube Growth Card */}
        <div className="bg-[#ff3366] border-none rounded-3xl p-6">
          <div className="mb-4">
            <h2 className="text-[#000000] text-2xl font-bold">YouTube Growth</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[#000000] font-bold text-lg mb-2">Basic</h3>
              <ul className="space-y-1 text-[#000000] text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Channel audit & optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  SEO-friendly titles & tags
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>1 content strategy
                  session
                </li>
                <li className="flex items-start gap-2 ml-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  Ideal for new creators
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#000000] font-bold text-lg mb-2">Standard</h3>
              <ul className="space-y-1 text-[#000000] text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  {"Monthly content plan (×4 videos)"}
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Thumbnail feedback & improvements
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Performance tracking report
                </li>
                <li className="flex items-start gap-2 ml-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  Perfect for growing channels
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#000000] font-bold text-lg mb-2">Premium</h3>
              <ul className="space-y-1 text-[#000000] text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Full channel management
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Weekly strategy calls
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Advanced growth tactics & monetization
                </li>
                <li className="flex items-start gap-2 ml-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  Best for brands & influencers
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Music Production Card */}
        <div className="bg-[#ff3366] border-none rounded-3xl p-6">
          <div className="mb-4">
            <h2 className="text-[#000000] text-2xl font-bold">Music Production</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[#000000] font-bold text-lg mb-2">Basic</h3>
              <ul className="space-y-1 text-[#000000] text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Custom beat (non-exclusive)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Basic mix & master
                </li>
                <li className="flex items-start gap-2 ml-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  Good for intros, background music
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#000000] font-bold text-lg mb-2">Standard</h3>
              <ul className="space-y-1 text-[#000000] text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Exclusive beat creation
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Vocal mixing + mastering
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Audio branding (sound logo optional)
                </li>
                <li className="flex items-start gap-2 ml-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  Ideal for artists or content creators
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#000000] font-bold text-lg mb-2">Premium</h3>
              <ul className="space-y-1 text-[#000000] text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Full track production (beat + vocals)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Revisions + mastering for streaming
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Sync-ready for YouTube/ads
                </li>
                <li className="flex items-start gap-2 ml-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  Professional release-ready music
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Video Creation Card */}
        <div className="bg-[#ff3366] border-none rounded-3xl p-6">
          <div className="mb-4">
            <h2 className="text-[#000000] text-2xl font-bold">Video Creation</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[#000000] font-bold text-lg mb-2">Basic</h3>
              <ul className="space-y-1 text-[#000000] text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Video editing (up to 5 min)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Basic transitions & audio sync
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>1 thumbnail design
                </li>
                <li className="flex items-start gap-2 ml-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  For short-form content or clips
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#000000] font-bold text-lg mb-2">Standard</h3>
              <ul className="space-y-1 text-[#000000] text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Video editing (up to 10 min)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Motion graphics + intro/outro
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Thumbnail + title suggestions
                </li>
                <li className="flex items-start gap-2 ml-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  For vloggers or series creators
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#000000] font-bold text-lg mb-2">Premium</h3>
              <ul className="space-y-1 text-[#000000] text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Full video production (script to final cut)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  Animated elements & branding
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#000000] rounded-full mt-2 flex-shrink-0"></span>
                  SEO-optimized title, tags & description
                </li>
                <li className="flex items-start gap-2 ml-4">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  Complete content creation service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
